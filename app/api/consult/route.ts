import { NextRequest, NextResponse } from "next/server";
import { object, string } from "yup";
import { sendEmail } from "../helpers/mail-service";
import { envs } from "@/app/config/envs";
import { mailTemplate } from "../helpers/mail-template";

// Esquema de validación con Yup
const postSchema = object({
  name: string().required(),
  phone: string().required(),
  email: string().email().required(),
  message: string().required(),
});

export async function POST(request: NextRequest) {
  try {
    // Validar datos recibidos
    const { name, phone, email, message } = await postSchema.validate(
      await request.json()
    );

    // Generar cuerpo HTML del email
    const htmlBody = mailTemplate(name, phone, email, message);

    // Enviar correo
    await sendEmail({
      to: envs.MAILER_RECEPTOR, // Receptor del correo
      subject: "Nueva Consulta",
      htmlBody: htmlBody,
    });

    // Respuesta de éxito
    return NextResponse.json({ message: "Email enviado exitosamente." });
  } catch (error) {
    console.error("Error al enviar el email:", error);

    // Respuesta de error
    return NextResponse.json(
      { error: "Hubo un problema al procesar la solicitud." },
      { status: 400 }
    );
  }
}
