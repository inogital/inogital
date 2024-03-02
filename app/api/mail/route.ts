import sendMail from "@/lib/sendMail";
import { NextRequest, NextResponse } from "next/server";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: FormData = await req.json();


    const { name,  email, message, phone } = body;

    const res = await sendMail({
      subject: `New Form Submission from ${name}`,
      to: "info@inogital.com",
      text: `${name}  with email address ${email}  and phone number ${phone} sent you a message as follows: ${message}`,
    });

    if (res === "ok") {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    if (res === "err") {
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
