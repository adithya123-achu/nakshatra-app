// Convert birth details into JavaScript Date

export const createBirthDateTime = (birthData) => {

    return new Date(
      `${birthData.dateOfBirth}T${birthData.timeOfBirth}`
    );
  
  };
  
  // UTC Date
  
  export const getUTCDate = (birthData) => {
  
    const local = createBirthDateTime(birthData);
  
    return new Date(local.toISOString());
  
  };
  
  // ISO String
  
  export const getISOString = (birthData) => {
  
    return createBirthDateTime(birthData).toISOString();
  
  };