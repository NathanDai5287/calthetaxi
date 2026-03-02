package com.fraternity.reimbursement

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.context.properties.ConfigurationPropertiesScan

@SpringBootApplication
@ConfigurationPropertiesScan
class ReimbursementApplication

fun main(args: Array<String>) {
	runApplication<ReimbursementApplication>(*args)
}
