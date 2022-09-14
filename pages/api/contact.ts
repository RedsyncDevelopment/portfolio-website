import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (!req.body.data) {
      return res.status(400).json({ error: "Something went wrong" });
    }

    let nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      port: 465,
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: req.body.data.email,
      subject: `Message From ${req.body.data.name}`,
      text: req.body.data.message + " | Sent from: " + req.body.data.email,
      html: `<div>Name: ${req.body.data.name}</div><div>Company: ${req.body.data.company}</div><div>Message: ${req.body.data.message}</div><p>Sent from:
    ${req.body.data.email}</p>`,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err: any, info: any) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    return res.status(200).json({ message: "Message sent successfully!" });
  } else {
    return res.status(400).json({ error: "Something went wrong" });
  }
}
