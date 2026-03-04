package com.fraternity.reimbursement.controller

import com.fraternity.reimbursement.dto.request.CreateReimbursementRequest
import com.fraternity.reimbursement.dto.response.ReimbursementResponse
import com.fraternity.reimbursement.model.enums.ReimbursementStatus
import com.fraternity.reimbursement.service.ReimbursementService
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/api/reimbursements")
class ReimbursementController(private val reimbursementService: ReimbursementService) {

	@GetMapping
	fun getAll(
		@RequestParam(required = false) status: ReimbursementStatus?
	): ResponseEntity<List<ReimbursementResponse>> {
		return ResponseEntity.ok(reimbursementService.getAll(status))
	}

	@PostMapping(consumes = [MediaType.MULTIPART_FORM_DATA_VALUE])
	fun create(
		@RequestPart("data") request: CreateReimbursementRequest,
		@RequestPart("file") file: MultipartFile
	): ResponseEntity<ReimbursementResponse> {
		return ResponseEntity.status(HttpStatus.CREATED).body(reimbursementService.create(request, file))
	}
}
