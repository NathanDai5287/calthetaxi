package com.fraternity.reimbursement.model

import com.fraternity.reimbursement.model.enums.ReimbursementStatus
import jakarta.persistence.*
import java.math.BigDecimal
import java.util.UUID
import java.time.Instant

@Entity
@Table(name = "reimbursements")
data class Reimbursement(
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	val id: UUID? = null,

	@Column(name = "user_id", nullable = false)
	val userId: UUID,

	@Column(nullable = false)
	val description: String,

	@Column(nullable = false, precision = 10, scale = 2)
	val amount: BigDecimal,

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	val status: ReimbursementStatus = ReimbursementStatus.PENDING,

	@Column(name = "receipt_key", nullable = false)
	val receiptKey: String,

	@Column(name = "admin_note")
	val adminNote: String? = null,

	@Column(name = "reviewed_by")
	val reviewedBy: UUID? = null,

	@Column(name = "created_at", nullable = false, updatable = false)
	val createdAt: Instant = Instant.now()
)
