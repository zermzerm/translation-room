import axios from "axios";

export const translateApi = async (from, to, text) => {
  try {
    const response = await axios.post(
      "https://model-nmt.aidmtlabs.com/api/texts/translation",
      {
        from_lang: from,
        to_lang: to,
        text: text,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.result.result;
  } catch (error) {
    console.error("번역 실패:", error);
    throw error;
  }
};
