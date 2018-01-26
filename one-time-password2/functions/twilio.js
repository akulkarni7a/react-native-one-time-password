const twilio = require('twilio');

const accountSid="ACcd119963f73bce8878e3f8614fd43ae4";
const authToken="6182b6f25375db1809956cfe4524544f";

module.exports = new twilio.Twilio(accountSid, authToken);