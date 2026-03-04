package com.fraternity.reimbursement.service

import com.fraternity.reimbursement.model.Reimbursement
import com.fraternity.reimbursement.model.enums.ReimbursementStatus
import com.fraternity.reimbursement.repository.ReimbursementRepository
import org.springframework.stereotype.Service

@Service
class ReimbursementService(private val reimbursementRepository: ReimbursementRepository) {

	fun getAll(status: ReimbursementStatus?): List<Reimbursement> {
		return if (status != null) {
			reimbursementRepository.findByStatus(status)
		} else {
			reimbursementRepository.findAll()
		}
	}
}
