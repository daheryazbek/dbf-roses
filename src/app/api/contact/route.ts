import formData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY || "",
      url: "https://api.mailgun.net", // Forzar conexión a la región de EE.UU.
    });

    const result = await mg.messages.create("mg.dbfroses.com", {
      from: "DBF Roses <postmaster@mg.dbfroses.com>",
      to: ["ventas@dbfroses.com"],
      subject: "Nuevo cliente desde la web",
      text: `
Nombre: ${body.name}
Empresa: ${body.company}
Correo: ${body.email}
País: ${body.country}
Mensaje: ${body.message}
      `,
    });

    console.log("Mailgun Result:", result);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Mailgun Error Details:", error);
    return Response.json({ success: false, error: String(error) }, { status: 500 });
  }
}