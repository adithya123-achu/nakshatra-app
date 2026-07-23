import api from "./api";

export const askAstrologer = async (question) => {
  const response = await api.post("/chat", {
    question,
  });

  return response.data.answer;
};