package com.fraternity.reimbursement.service

import com.fraternity.reimbursement.dto.request.LoginRequest
import com.fraternity.reimbursement.dto.request.RegisterRequest
import com.fraternity.reimbursement.model.User
import com.fraternity.reimbursement.model.enums.Role
import com.fraternity.reimbursement.repository.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException

@Service
class AuthService(
	private val userRepository: UserRepository,
	private val passwordEncoder: PasswordEncoder,
	private val jwtService: JwtService
) {

	fun register(request: RegisterRequest): String {
		if (userRepository.existsByEmail(request.email)) {
			throw ResponseStatusException(HttpStatus.CONFLICT, "Email already registered")
		}

		val user = User(
			name = request.name,
			email = request.email,
			password = passwordEncoder.encode(request.password)!!,
			role = Role.MEMBER
		)

		userRepository.save(user)
		return jwtService.generateToken(user.email, user.role.name)
	}

	fun login(request: LoginRequest): String {
		val user = userRepository.findByEmail(request.email)
			?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials")

		if (!passwordEncoder.matches(request.password, user.password)) {
			throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials")
		}

		return jwtService.generateToken(user.email, user.role.name)
	}
}
