import api from "./api";

export const saveBirthDetails = async (birthData) => {
  const response = await api.post("/birth-details", {
    fullName: birthData.fullName,
    dateOfBirth: birthData.dateOfBirth,
    timeOfBirth: birthData.timeOfBirth,
    placeOfBirth: birthData.placeOfBirth,
  });

  return response.data;
};