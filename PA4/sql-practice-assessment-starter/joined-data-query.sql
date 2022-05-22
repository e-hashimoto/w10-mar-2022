SELECT full_name, type, name, merchant_name FROM merchants
INNER JOIN users ON (merchants.admin_id = users.id)
INNER JOIN countries ON (merchants.country_id = countries.id)
INNER JOIN merchant_types ON (merchants.merchant_type_id = merchant_types.id)
ORDER BY merchant_name;
