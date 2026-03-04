CREATE TABLE users (
	id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	name        VARCHAR(255) NOT NULL,
	email       VARCHAR(255) UNIQUE NOT NULL,
	password    VARCHAR(255) NOT NULL,
	role        VARCHAR(20) NOT NULL CHECK (role IN ('MEMBER', 'ADMIN')),
	created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE reimbursements (
	id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	user_id     UUID NOT NULL REFERENCES users(id),
	description TEXT NOT NULL,
	amount      DECIMAL(10, 2) NOT NULL,
	status      VARCHAR(20) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED')),
	receipt_key TEXT NOT NULL,
	admin_note  TEXT,
	reviewed_by UUID REFERENCES users(id),
	created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE receipt_parses (
	id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	reimbursement_id  UUID NOT NULL UNIQUE REFERENCES reimbursements(id),
	parsed_amount     DECIMAL(10, 2),
	parsed_vendor     VARCHAR(255),
	parsed_date       DATE,
	parsed_items      JSONB,
	amount_matches    BOOLEAN DEFAULT FALSE,
	status            VARCHAR(20) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'PARSING', 'PARSED', 'FAILED')),
	created_at        TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_reimbursements_user_id ON reimbursements(user_id);
CREATE INDEX idx_reimbursements_status ON reimbursements(status);
CREATE INDEX idx_receipt_parses_reimbursement_id ON receipt_parses(reimbursement_id);
