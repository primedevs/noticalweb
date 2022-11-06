require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
sgMail.setApiKey(SG_API_KEY);
console.log(SG_API_KEY);
export default async function handler(req, res) {
  const { name, email, message } = req.body;
  const msg = {
    to: TO_EMAIL, // Change to your recipient
    from: FROM_EMAIL, // Change to your verified sender
    subject: "Contact from Primedevs Website",
    html: `<p><strong>Sender Name: </strong>${name}</p>
    <p><strong>Sender Email: </strong>${email}</p>    
    <p><strong>Sender Message: </strong>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log("email sent");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
}
