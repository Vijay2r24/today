import React from 'react';

const StatusBadge = ({ status }) => {
  const badgeColor =
    status === "Dispatched"
      ? "bg-green-100 text-green-800 ring-green-700/30" // Brighter green background and darker green text
      : "bg-red-100 text-red-800 ring-red-700/30"; // Brighter red background and darker red text

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full w-24 h-8 text-xs font-semibold ring-1 ring-inset ${badgeColor}`}
    >
      {status}
    </span>
  );
};


export default StatusBadge;
