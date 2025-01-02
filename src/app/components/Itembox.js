import React from "react";

// const Itembox = () => {
//   return (
//     <div>
//        <div className="mt-8 h-64 flex items-center justify-center border-2 border-gray-300 rounded-lg bg-white text-gray-500">
//           <p className="text-xl font-semibold text-gray-400">Your items here</p>
//         </div>
//       </div>

//   )
//}

// Itembox.js
const Itembox = ({ status }) => {
  // Placeholder content based on the status
  let content;
  switch (status) {
    case "Pending":
      content = <p>Showing Pending items...</p>;
      break;
    case "Approved":
      content = <p>Showing Approved items...</p>;
      break;
    case "Rejected":
      content = <p>Showing Rejected items...</p>;
      break;
    default:
      content = <p>Please select a status.</p>;
  }

  return (
    <div className="mt-8 h-64 flex items-center justify-center border-2 border-gray-300 rounded-lg bg-white text-gray-500">
      {content}
    </div>
  );
};

export default Itembox;
