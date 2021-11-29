const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const transporter = nodemailer.createTransport(
  mg({
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  })
);

exports.handler = function(event, _context) {
  const lead = JSON.parse(event.body);
  // console.log(`Sending PDF report to ${destination}`);

  transporter.sendMail(
    {
      from: process.env.SENDER,
      to: process.env.DESTINATION,
      subject: 'Your Got a Lead!',
      text: JSON.stringify(lead),
    },
    function(error, info) {
      if (error) {
        console.log('error: ', error);
        return {
          statusCode: 400,
          body: `${error}`,
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(info),
        };
      }
    }
  );
};
