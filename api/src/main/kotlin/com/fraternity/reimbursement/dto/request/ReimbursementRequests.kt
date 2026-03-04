package com.fraternity.reimbursement.dto.request

import java.math.BigDecimal

data class CreateReimbursementRequest(
	val description: String,
	val amount: BigDecimal
)
