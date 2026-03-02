package com.fraternity.reimbursement.service

import com.fraternity.reimbursement.config.JwtProperties
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import org.springframework.stereotype.Service
import java.util.Date

@Service
class JwtService(private val jwtProperties: JwtProperties) {

	private val key = Keys.hmacShaKeyFor(jwtProperties.secret.toByteArray())

	fun generateToken(email: String, role: String): String {
		return Jwts.builder()
			.subject(email)
			.claim("role", role)
			.issuedAt(Date())
			.expiration(Date(System.currentTimeMillis() + jwtProperties.expiration))
			.signWith(key)
			.compact()
	}

	fun extractEmail(token: String): String? {
		return try {
			Jwts.parser()
				.verifyWith(key)
				.build()
				.parseSignedClaims(token)
				.payload
				.subject
		} catch (e: Exception) {
			null
		}
	}

	fun isValid(token: String): Boolean {
		return extractEmail(token) != null
	}
}
