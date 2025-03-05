import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;
export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  const modifiedEmail = email.replace(/@/g, '.');  // 将 email 中的 @ 替换为 .
  console.log(modifiedEmail, subject, message);
  try {
    const data = await resend.emails.send({
      from: modifiedEmail + "@resend.dev" ,
      to: toEmail,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
