# MSA BEE Foundation | Administrative Terminal Manual
## Official Client Handover & Handover Guide

Welcome to the administrative backbone of the MSA BEE Foundation website. This guide provides comprehensive instructions for managing the site's content, media, and financial data.

---

## 1. Access & Security 🛡️

### 1.1 Entering the Terminal
The administrative panel is located at: `https://msabeefoundation.com/admin`

### 1.2 Protocol Access Code
To prevent unauthorized access, the terminal is protected by a **Protocol Access Code (Admin Password)**.
- **Login Process**: Enter your secure password into the "Vault Admin" prompt.
- **Session Duration**: For security, sessions expire after **2 hours** of inactivity. You will need to re-verify your identity to continue.

> [!IMPORTANT]
> **Credential Security**: Never share your access code via email or chat. If you suspect your code is compromised, notify your technical lead to update the `ADMIN_PASSWORD` server environment variable.

---

## 2. The Command Center (Dashboard) 📊

Upon login, you are presented with the **Command Center**. This view provides a high-level overview of the foundation's digital telemetry:
- **Total Inflow**: The combined sum of all successful verified donations.
- **Asset Index**: Total count of photos and videos archived in your gallery.
- **Recent Telemetry**: A live feed of the latest 5 successful donations.

---

## 3. Global Configuration (Settings) ⚙️

The **Content Studio** allows you to override site-wide constants without touching any code.

### 3.1 Branding & Contact
Under the **Branding** tab, you can update:
- **Administrative Email**: The official contact email displayed in the footer.
- **Foundation Hotline**: The primary phone number for outreach.
- **HQ Location**: The physical address of the foundation.

### 3.2 Impact Report (Metrics)
The foundation's "Proof of Impact" counters can be updated in the **Impact Report** tab. Update these numbers (Athletes Trained, Scholarships, etc.) as your influence grows.

### 3.3 Secure Vault (API Keys)
Located in the **Secure Vault** tab, this section manages the engine's power:
- **Flutterwave Keys**: Required for processing donations and withdrawals.
- **Cloudinary Info**: Handles all image and video hosting.
- **Resend API**: Manages automated email notifications.

> [!CAUTION]
> **Vault Sensitivity**: Incorrectly modifying the "Secure Vault" values can disable donation processing or media uploads. Only update these if you are rotating API keys.

---

## 4. Media Archival (Gallery) 📸

The **Archive Batch** tool is designed for bulk media management.

### 4.1 Uploading Images
1. Navigate to **Archive Batch**.
2. Ensure **"Images"** is selected.
3. Drag and drop your photos into the uploader. Use the **Native Uploader** for instant visual feedback.
4. **Instant Preview**: You will see a thumbnail immediately. The upload happens in the background, so you can continue filling out the form.

### 4.2 Adding Videos
1. Select **"Videos"**.
2. Paste the **YouTube URL** into the input field and click "Add URL".
3. Multiple videos can be batched together in one archive session.

### 4.3 Categorization
Assign every batch a **Title**, **Category** (e.g., Sports Clinics), and **Year**. This ensures the "Media Archives" page remains organized chronologically for the public.

---

## 5. Financial Management 💰

### 5.1 Inflow Ledger (Donations)
The **Inflow Ledger** is a read-only verified history of every contribution.
- **Status Verification**: Transactions marked as `SUCCESS` have been settled in your Flutterwave account.
- **Search**: Use the search bar to find specific donors by email or transaction reference.

### 5.2 Financial Hub (Withdrawals)
The **Financial Hub** manages capital redistribution from your Flutterwave vault to your foundation's bank account.
- **Vault Balance**: View your current available balance in Real-Time.
- **Initiating Settlement**: Enter the amount and click **Initiate Withdrawal**. Funds are sent to the official settlement bank account configured in your settings.

---

## 6. Handover Checklist ✅

- [ ] Verify `ADMIN_PASSWORD` is set in the hosting environment.
- [ ] Connect production **Flutterwave** Social/Secret keys.
- [ ] Configure **Cloudinary** Cloud Name and Upload Preset.
- [ ] Test the "Donate" flow with a live transaction.
- [ ] Upload at least one new "Impact" photo to verify the Cloudinary pipeline.

---
**Handover Status**: Ready for Production.
**Technical Support**: Stephen Onucheyo (Developer)
