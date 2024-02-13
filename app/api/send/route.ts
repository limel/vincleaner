// import { Email } from "@/components/Email";
import { EmailTemplate } from "components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const messagData = await req.json().then((body) => body);

  const data = await resend.emails.send({
    from: "autocleaner@resend.dev",
    to: "limelaudio@gmail.com",
    subject: `Заявка с сайта от ${messagData.name} !`,
    react: EmailTemplate(messagData) as any,
  });

  return NextResponse.json({ data, error: null }, { status: 200 });
}
