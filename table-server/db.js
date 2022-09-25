const Client = require('pg').Client
const { DEV, DATABASE_URL } = process.env

const client = new Client({
  connectionString: DATABASE_URL,
  ssl: DEV ? null : { rejectUnauthorized: false },
})
client.connect()

module.exports = client
