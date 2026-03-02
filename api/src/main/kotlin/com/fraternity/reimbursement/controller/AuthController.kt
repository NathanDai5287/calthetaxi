package com.fraternity.reimbursement.controller

import com.fraternity.reimbursement.dto.request.LoginRequest
import com.fraternity.reimbursement.dto.request.RegisterRequest
import com.fraternity.reimbursement.service.AuthService
import jakarta.servlet.http.HttpServletResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/auth")
class AuthController(private val authService: AuthService) {

	@PostMapping("/register")
	fun register(
		@RequestBody request: RegisterRequest,
		response: HttpServletResponse
	): ResponseEntity<Map<String, String>> {
		val token = authService.register(request)
		addJwtCookie(response, token)
		return ResponseEntity.ok(mapOf("message" to "Registered successfully"))
	}

	@PostMapping("/login")
	fun login(
		@RequestBody request: LoginRequest,
		response: HttpServletResponse
	): ResponseEntity<Map<String, String>> {
		val token = authService.login(request)
		addJwtCookie(response, token)
		return ResponseEntity.ok(mapOf("message" to "Login successful"))
	}

	private fun addJwtCookie(response: HttpServletResponse, token: String) {
		val cookie = jakarta.servlet.http.Cookie("jwt", token).apply {
			isHttpOnly = true
			secure = true
			path = "/"
			maxAge = 86400 // 24 hours
		}
		response.addCookie(cookie)
	}
}
