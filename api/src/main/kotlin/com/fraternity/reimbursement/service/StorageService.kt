package com.fraternity.reimbursement.service

import com.fraternity.reimbursement.config.R2Properties
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import software.amazon.awssdk.core.sync.RequestBody
import software.amazon.awssdk.services.s3.S3Client
import software.amazon.awssdk.services.s3.model.PutObjectRequest
import software.amazon.awssdk.services.s3.presigner.S3Presigner
import software.amazon.awssdk.services.s3.model.GetObjectRequest
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest
import java.time.Duration
import java.util.UUID

@Service
class StorageService(
	private val s3Client: S3Client,
	private val s3Presigner: S3Presigner,
	private val r2Properties: R2Properties
) {

	fun upload(userId: UUID, file: MultipartFile): String {
		val key = "receipts/$userId/${UUID.randomUUID()}-${file.originalFilename}"

		s3Client.putObject(
			PutObjectRequest.builder()
				.bucket(r2Properties.bucket)
				.key(key)
				.contentType(file.contentType)
				.build(),
			RequestBody.fromBytes(file.bytes)
		)

		return key
	}

	fun generatePresignedUrl(key: String): String {
		val presignRequest = GetObjectPresignRequest.builder()
			.signatureDuration(Duration.ofHours(1))
			.getObjectRequest(
				GetObjectRequest.builder()
					.bucket(r2Properties.bucket)
					.key(key)
					.build()
			)
			.build()

		return s3Presigner.presignGetObject(presignRequest).url().toString()
	}
}
