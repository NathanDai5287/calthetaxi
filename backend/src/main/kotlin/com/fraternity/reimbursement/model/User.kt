package com.fraternity.reimbursement.model

import com.fraternity.reimbursement.model.enums.Role
import jakarta.persistence.*
import java.time.Instant
import java.util.UUID

@Entity
@Table(name = "users")
data class User(
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	val id: UUID? = null,

	@Column(nullable = false)
	val name: String,

	@Column(nullable = false, unique = true)
	val email: String,

	@Column(nullable = false)
	val password: String,

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	val role: Role = Role.MEMBER,

	@Column(name = "created_at", nullable = false, updatable = false)
	val createdAt: Instant = Instant.now()
)
