package com.fraternity.reimbursement.service

import com.fraternity.reimbursement.dto.request.CreateReimbursementRequest
import com.fraternity.reimbursement.dto.response.ReimbursementResponse
import com.fraternity.reimbursement.model.ReceiptParse
import com.fraternity.reimbursement.model.Reimbursement
import com.fraternity.reimbursement.model.enums.ReimbursementStatus
import com.fraternity.reimbursement.repository.ReceiptParseRepository
import com.fraternity.reimbursement.repository.ReimbursementRepository
import com.fraternity.reimbursement.repository.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.server.ResponseStatusException

@Service
class ReimbursementService(
	private val reimbursementRepository: ReimbursementRepository,
	private val receiptParseRepository: ReceiptParseRepository,
	private val userRepository: UserRepository,
	private val storageService: StorageService
) {

	fun getAll(status: ReimbursementStatus?): List<ReimbursementResponse> {
		val reimbursements = if (status != null) {
			reimbursementRepository.findByStatus(status)
		} else {
			reimbursementRepository.findAll()
		}

		return reimbursements.map { ReimbursementResponse.from(it, storageService.generatePresignedUrl(it.receiptKey)) }
	}

	fun create(request: CreateReimbursementRequest, file: MultipartFile): ReimbursementResponse {
		val email = SecurityContextHolder.getContext().authentication?.principal as? String
			?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Not authenticated")
		val user = userRepository.findByEmail(email)
			?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found")

		val userId = user.id ?: throw ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "User has no ID")
		val receiptKey = storageService.upload(userId, file)

		val reimbursement = reimbursementRepository.save(
			Reimbursement(
				userId = userId,
				description = request.description,
				amount = request.amount,
				receiptKey = receiptKey
			)
		)

		receiptParseRepository.save(ReceiptParse(reimbursementId = reimbursement.id!!))

		return ReimbursementResponse.from(reimbursement, storageService.generatePresignedUrl(receiptKey))
	}
}
