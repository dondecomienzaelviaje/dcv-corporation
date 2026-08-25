import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Todos los campos son obligatorios.",
        },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "DCV Corporation <contacto@dcvcorp.com>",
      to: ["contacto@dcvcorp.com"],
      replyTo: email,
      subject: `Contacto DCV: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Nuevo mensaje desde DCV Corporation</h2>

          <p><strong>Nombre:</strong> ${name}</p>

          <p><strong>Correo:</strong> ${email}</p>

          <p><strong>Asunto:</strong> ${subject}</p>

          <p><strong>Mensaje:</strong></p>

          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente.",
    });
  } catch (error) {
    console.error("Error enviando correo:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No fue posible enviar el mensaje.",
      },
      { status: 500 }
    );
  }
}