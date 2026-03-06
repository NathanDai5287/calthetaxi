package com.fraternity.reimbursement.model

import com.fraternity.reimbursement.model.enums.ReceiptParseStatus
import jakarta.persistence.*
import org.hibernate.annotations.JdbcTypeCode
import org.hibernate.type.SqlTypes
import java.math.BigDecimal
import java.time.Instant
import java.time.LocalDate
import java.util.UUID

@Entity
@Table(name = "receipt_parses")
data class ReceiptParse(
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	val id: UUID? = null,

	@Column(name = "reimbursement_id", nullable = false)
	val reimbursementId: UUID,

	@Column(name = "parsed_amount", precision = 10, scale = 2)
	val parsedAmount: BigDecimal? = null,

	@Column(name = "parsed_vendor")
	val parsedVendor: String? = null,

	@Column(name = "parsed_date")
	val parsedDate: LocalDate? = null,

	@JdbcTypeCode(SqlTypes.JSON)
	@Column(name = "parsed_items", columnDefinition = "jsonb")
	val parsedItems: String? = null,

	@Column(name = "amount_matches")
	val amountMatches: Boolean = false,

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	val status: ReceiptParseStatus = ReceiptParseStatus.PENDING,

	@Column(name = "created_at", nullable = false, updatable = false)
	val createdAt: Instant = Instant.now()
)
