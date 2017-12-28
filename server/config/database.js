const crypto = require('crypto').randomBytes(256).toString('hex');
const db = 'cash';
module.exports = {
    uri: `mongodb://localhost:27017/${db}`,
    secret: crypto,
    db: `${db}`
}