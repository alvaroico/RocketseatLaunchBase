const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "803d602153d7d6",
    pass: "273921c0d4b71f"
  }
});
