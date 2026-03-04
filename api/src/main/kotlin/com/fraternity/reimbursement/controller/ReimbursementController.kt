package com.fraternity.reimbursement.controller

import com.fraternity.reimbursement.model.Reimbursement
import com.fraternity.reimbursement.model.enums.ReimbursementStatus
import com.fraternity.reimbursement.service.ReimbursementService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/reimbursements")
class ReimbursementController(private val reimbursementService: ReimbursementService) {

	@GetMapping
	fun getAll(
		@RequestParam(required = false) status: ReimbursementStatus?
	): ResponseEntity<List<Reimbursement>> {
		return ResponseEntity.ok(reimbursementService.getAll(status))
	}
}
