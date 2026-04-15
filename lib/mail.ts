export const sendDonationEmail = async (
  amount: number, 
  currency: string, 
  email: string,
  apiKey?: string | null,
  toEmail?: string | null
) => {
  try {
    const key = apiKey || process.env.RESEND_API_KEY;
    if (!key) {
      console.warn('Mail system: No API Key provided (Resend)');
      return;
    }

    const resend = new Resend(key);
    
    await resend.emails.send({
      from: 'MSA BEE Foundation <donations@msabeefoundation.com>',
      to: toEmail || process.env.ADMIN_EMAIL || 'info@msabeefoundation.com',
      subject: 'New Donation Received! 🌟',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #000; font-size: 24px; font-weight: 800; margin-bottom: 20px; text-transform: uppercase; letter-spacing: -0.05em;">Contribution Received</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #666;">A new donation has been verified for the MSA BEE Foundation archives.</p>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 30px;">
            <p style="margin: 0; font-size: 12px; color: #999; text-transform: uppercase; font-weight: bold; letter-spacing: 0.1em;">Donor Email</p>
            <p style="margin: 5px 0 20px; font-size: 18px; font-weight: bold; color: #333;">${email}</p>
            
            <p style="margin: 0; font-size: 12px; color: #999; text-transform: uppercase; font-weight: bold; letter-spacing: 0.1em;">Amount</p>
            <p style="margin: 5px 0 0; font-size: 32px; font-weight: 900; color: #000;">${currency} ${amount.toLocaleString()}</p>
          </div>
          
          <p style="margin-top: 40px; font-size: 12px; color: #aaa; text-align: center;">This is an automated notification from the Foundation Financial Hub.</p>
        </div>
      `,
    });
  } catch (error) {
    console.error('[EMAIL_SEND_ERROR]', error);
  }
};
