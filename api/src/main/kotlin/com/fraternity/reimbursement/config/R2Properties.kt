package com.fraternity.reimbursement.config

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "app.r2")
data class R2Properties(
	val endpoint: String,
	val accessKey: String,
	val secretKey: String,
	val bucket: String
)
