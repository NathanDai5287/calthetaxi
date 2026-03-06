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

	@PostMapping("/logout")
	fun logout(response: HttpServletResponse): ResponseEntity<Map<String, String>> {
		val jwtCookie = jakarta.servlet.http.Cookie("jwt", "").apply {
			isHttpOnly = true
			secure = true
			path = "/"
			maxAge = 0
		}
		response.addCookie(jwtCookie)

		val loggedInCookie = jakarta.servlet.http.Cookie("loggedIn", "").apply {
			isHttpOnly = false
			secure = true
			path = "/"
			maxAge = 0
		}

		response.addCookie(loggedInCookie)
		return ResponseEntity.ok(mapOf("message" to "Logged out successfully"))
	}

	private fun addJwtCookie(response: HttpServletResponse, token: String) {
		val jwtCookie = jakarta.servlet.http.Cookie("jwt", token).apply {
			isHttpOnly = true
			secure = true
			path = "/"
			maxAge = 86400 // 24 hours
		}
		response.addCookie(jwtCookie)

		val loggedInCookie = jakarta.servlet.http.Cookie("loggedIn", "true").apply {
			isHttpOnly = false
			secure = true
			path = "/"
			maxAge = 86400 // 24 hours
		}
		response.addCookie(loggedInCookie)
	}
}
