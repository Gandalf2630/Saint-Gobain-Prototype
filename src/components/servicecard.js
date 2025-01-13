import React from "react";

const ServiceCard = ({ navn, telefonNummer, occupation, afdeling, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Container til billedet */}
      <div className="w-full h-48 flex items-center justify-center bg-gray-100">
        <img
          src={image}
          alt={navn}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      {/* Tekstindhold */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{navn}</h2>
        <p className="text-sm text-gray-600 mt-2">{occupation} - {afdeling}</p>
        <p className="text-sm text-gray-500 mt-2">{telefonNummer}</p>
      </div>
    </div>
  );
};

export default ServiceCard;