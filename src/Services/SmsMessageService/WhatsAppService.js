import axios from "axios";

const whatsAppGraphApi =
  "https://graph.facebook.com/v13.0/111029435017815/messages";
const token =
  "EAALh5A1fEb0BANS2MLz0sAuxZAOUYZBN201QbZCVJ5jT7YZBFzMpIz1pRgHD5hLFTgDUklbcI5ZAH2WpQkdwjVZBWdG6dZCNwMr6DKIloqZBnZBD4ZApEZAoxwymXflxF9GO3O6UDisETGKZAVz7iMPDtiPB52vZAp00xayWyUgXR0GUNbbgOLaFwWuRGZCpVRrNdOgVKUUfxQtxRrHAZDZD";

async function sendWhatsAppMessage(mobileNumber) {
  if (mobileNumber && mobileNumber.length === 11) {
    const optPassword = Math.floor(100000 + Math.random() * 900000);
    const response = await axios.post(
      whatsAppGraphApi,
      {
        messaging_product: "whatsapp",
        to: "972522520484",
        type: "text",
        text: {
          body: optPassword,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  }
}

const WhatsAppService = {
  sendWhatsAppMessage: sendWhatsAppMessage,
};
export { WhatsAppService };
