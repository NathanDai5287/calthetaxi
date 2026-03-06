package com.fraternity.reimbursement.repository

import com.fraternity.reimbursement.model.ReceiptParse
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface ReceiptParseRepository : JpaRepository<ReceiptParse, UUID>
