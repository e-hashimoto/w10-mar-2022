CREATE TABLE merchants (
    id SERIAL PRIMARY KEY NOT NULL,
    merchant_name VARCHAR(255) NOT NULL,
    country_id INTEGER NOT NULL REFERENCES countries (id),
    created_at TIMESTAMP NOT NULL,
    admin_id INTEGER NOT NULL REFERENCES users (id),
    merchant_type_id INTEGER NOT NULL REFERENCES merchant_types (id)
);
