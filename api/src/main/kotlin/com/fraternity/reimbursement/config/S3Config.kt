package com.fraternity.reimbursement.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.s3.S3Client
import software.amazon.awssdk.services.s3.presigner.S3Presigner
import java.net.URI

@Configuration
class S3Config(private val r2Properties: R2Properties) {

	@Bean
	fun s3Client(): S3Client {
		return S3Client.builder()
			.endpointOverride(URI.create(r2Properties.endpoint))
			.credentialsProvider(
				StaticCredentialsProvider.create(
					AwsBasicCredentials.create(r2Properties.accessKey, r2Properties.secretKey)
				)
			)
			.region(Region.of("auto"))
			.build()
	}

	@Bean
	fun s3Presigner(): S3Presigner {
		return S3Presigner.builder()
			.endpointOverride(URI.create(r2Properties.endpoint))
			.credentialsProvider(
				StaticCredentialsProvider.create(
					AwsBasicCredentials.create(r2Properties.accessKey, r2Properties.secretKey)
				)
			)
			.region(Region.of("auto"))
			.build()
	}
}
