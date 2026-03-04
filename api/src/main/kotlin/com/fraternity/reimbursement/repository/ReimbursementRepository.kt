package com.fraternity.reimbursement.repository

import com.fraternity.reimbursement.model.Reimbursement
import com.fraternity.reimbursement.model.enums.ReimbursementStatus
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface ReimbursementRepository : JpaRepository<Reimbursement, UUID> {
	fun findByStatus(status: ReimbursementStatus): List<Reimbursement>
}
