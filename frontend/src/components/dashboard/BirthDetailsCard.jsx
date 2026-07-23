const BirthDetailsCard = ({
    birthDetails,
    formattedDate,
    formattedTime,
  }) => {
    return (
      <div className="bg-[#1b1835] rounded-2xl p-8 mb-8">
  
        <h2 className="text-2xl font-bold text-orange-300 mb-6">
          Birth Details
        </h2>
  
        <div className="space-y-3 text-lg">
  
          <p>
            <strong>Name:</strong>{" "}
            {birthDetails.fullName}
          </p>
  
          <p>
            <strong>Date:</strong>{" "}
            {formattedDate}
          </p>
  
          <p>
            <strong>Time:</strong>{" "}
            {formattedTime}
          </p>
  
          <p>
            <strong>Place:</strong>{" "}
            {birthDetails.placeOfBirth}
          </p>
  
        </div>
  
      </div>
    );
  };
  
  export default BirthDetailsCard;