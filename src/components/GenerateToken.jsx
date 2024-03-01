import React, { useState } from "react";

const GenerateToken = () => {
  const [token, setToken] = useState(null);

  const handleGeneratetoken = async () => {
    try {
      const response = await fetch(
        "https://boilers.megcrm.co.uk/api/GetToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }

      const data = await response.json();
      const authToken = data.token;
      console.log(authToken);
      setToken(authToken);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={handleGeneratetoken}
          className="px-3 py-1 bg-gray-800 rounded-md text-center text-white mt-4 mx-auto" 
        >
          genrate tooken
        </button>
      </div>
      {token && (
        <div>
          <p>Token: {token}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateToken;
