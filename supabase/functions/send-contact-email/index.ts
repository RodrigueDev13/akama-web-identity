
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();
    console.log("Received contact form submission:", { name, email, subject, message });

    // Email to the site administrator
    try {
      const adminEmailResponse = await resend.emails.send({
        from: "AKAMA GROUPE <onboarding@resend.dev>", // Utilisez l'adresse validée dans Resend
        to: ["admin@akamagroupe.com"], // Remplacez par l'email de l'administrateur
        subject: `Nouveau message de contact: ${subject}`,
        html: `
          <h1>Nouveau message de contact</h1>
          <p><strong>De:</strong> ${name} (${email})</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      console.log("Admin email sent successfully:", adminEmailResponse);
    } catch (adminEmailError) {
      console.error("Error sending admin email:", adminEmailError);
      // Continue with confirmation email even if admin email fails
    }

    // Confirmation email to the sender
    try {
      const confirmationEmailResponse = await resend.emails.send({
        from: "AKAMA GROUPE <onboarding@resend.dev>", // Utilisez l'adresse validée dans Resend
        to: [email],
        subject: "Nous avons bien reçu votre message",
        html: `
          <h1>Merci de nous avoir contacté, ${name}!</h1>
          <p>Nous avons bien reçu votre message concernant "${subject}".</p>
          <p>Notre équipe vous répondra dans les plus brefs délais.</p>
          <p>Cordialement,<br>L'équipe AKAMA GROUPE</p>
        `,
      });
      console.log("Confirmation email sent successfully:", confirmationEmailResponse);
    } catch (confirmationEmailError) {
      console.error("Error sending confirmation email:", confirmationEmailError);
      // Continue even if confirmation email fails
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
