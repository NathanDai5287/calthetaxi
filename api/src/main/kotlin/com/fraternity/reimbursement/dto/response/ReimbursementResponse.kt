package com.fraternity.reimbursement.dto.response

import com.fraternity.reimbursement.model.Reimbursement
import com.fraternity.reimbursement.model.enums.ReimbursementStatus
import java.math.BigDecimal
import java.time.Instant
import java.util.UUID

data class ReimbursementResponse(
	val id: UUID?,
	val userId: UUID,
	val description: String,
	val amount: BigDecimal,
	val status: ReimbursementStatus,
	val receiptUrl: String,
	val adminNote: String?,
	val reviewedBy: UUID?,
	val createdAt: Instant
) {
	companion object {
		fun from(reimbursement: Reimbursement, receiptUrl: String) = ReimbursementResponse(
			id = reimbursement.id,
			userId = reimbursement.userId,
			description = reimbursement.description,
			amount = reimbursement.amount,
			status = reimbursement.status,
			receiptUrl = receiptUrl,
			adminNote = reimbursement.adminNote,
			reviewedBy = reimbursement.reviewedBy,
			createdAt = reimbursement.createdAt
		)
	}
}
