export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { user_name, user_email, message, send_time } = req.body;

  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: { user_name, user_email, message, send_time },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("EmailJS error:", err.message);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
