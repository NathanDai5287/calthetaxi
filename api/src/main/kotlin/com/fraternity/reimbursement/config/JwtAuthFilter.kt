package com.fraternity.reimbursement.config

import com.fraternity.reimbursement.service.JwtService
import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter

@Component
class JwtAuthFilter(private val jwtService: JwtService) : OncePerRequestFilter() {

	override fun doFilterInternal(
		request: HttpServletRequest,
		response: HttpServletResponse,
		filterChain: FilterChain
	) {
		val token = request.cookies?.find { it.name == "jwt" }?.value

		if (token != null && jwtService.isValid(token)) {
			val email = jwtService.extractEmail(token)
			if (email != null) {
				val auth = UsernamePasswordAuthenticationToken(
					email,
					null,
					listOf(SimpleGrantedAuthority("ROLE_MEMBER"))
				)
				SecurityContextHolder.getContext().authentication = auth
			}
		}

		filterChain.doFilter(request, response)
	}
}
