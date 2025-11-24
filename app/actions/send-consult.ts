import { ContactFormValues } from "../interfaces/contact-form.interface";

export const sendConsultAction = async ({
  name,
  phone,
  email,
  message,
}: ContactFormValues) => {
  const response = await fetch("/api/consult", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phone, email, message }),
  });

  if (!response.ok) {
    throw new Error("Error al enviar la consulta");
  }

  return response.json();
};
