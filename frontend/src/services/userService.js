import api from "./api";

// =========================
// Get Profile
// =========================

export const getProfile = async () => {
  const response = await api.get("/user/profile");
  return response.data;
};

// =========================
// Update Profile
// =========================

export const updateProfile = async (profileData) => {
  const response = await api.put(
    "/user/profile",
    profileData
  );

  return response.data;
};

// =========================
// Change Password
// =========================

export const changePassword = async (passwordData) => {
  const response = await api.put(
    "/user/profile/password",
    passwordData
  );

  return response.data;
};

// =========================
// Update Birth Details
// =========================

export const updateBirthDetails = async (birthData) => {
  const response = await api.put(
    "/user/birth-details",
    birthData
  );

  return response.data;
};