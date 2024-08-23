// import React from 'react';

// function PaymentDetails() {
//   return (
//     <div className="max-w-6xl mx-auto ml-80 mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Payment Details</h2>

//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Payment Summary</h3>

//         <div className="grid grid-cols-2 gap-6">
//           {/* Advance Payment */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Advance Payment</label>
//             <input
//               type="number"
//               name="advancePayment"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>

//           {/* Balance Payment */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Balance Payment</label>
//             <input
//               type="number"
//               name="balancePayment"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>

//           {/* Total Payment */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Total Payment</label>
//             <input
//               type="number"
//               name="totalPayment"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>

//           {/* Payment Method */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Payment Method</label>
//             <input
//               type="text"
//               name="paymentMethod"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>
//         </div>

//         {/* Payment Status */}
//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Payment Status</label>
//           <input
//             type="text"
//             name="paymentStatus"
//             value={''} // Replace with dynamic data if needed
//             className="mt-1 p-2 w-full border rounded-md"
//             disabled
//           />
//         </div>
//       </div>

//       {/* Payment History */}
//       <div className="mt-10 p-6 bg-gray-100 shadow rounded-lg">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment History</h3>
//         <ul className="list-disc pl-6">
//           <li><strong>Date:</strong> 01/01/2024 - <strong>Amount:</strong> $1000 - <strong>Status:</strong> Completed</li>
//           <li><strong>Date:</strong> 02/01/2024 - <strong>Amount:</strong> $500 - <strong>Status:</strong> Pending</li>
//           {/* Add more payment history entries as needed */}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default PaymentDetails;


// import React from 'react';

// function PaymentDetails() {
//   return (
//     <div className="max-w-6xl mx-auto ml-80 mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Payment Details</h2>

//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Payment Summary</h3>

//         <div className="grid grid-cols-2 gap-6">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>

//           {/* Product Type */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Product Type</label>
//             <input
//               type="text"
//               name="productType"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>

//           {/* Advance Payment */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Advance Payment</label>
//             <input
//               type="number"
//               name="advancePayment"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>

//           {/* Balance Payment */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Balance Payment</label>
//             <input
//               type="number"
//               name="balancePayment"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>

//           {/* Total Payment */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Total Payment</label>
//             <input
//               type="number"
//               name="totalPayment"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>

//           {/* Payment Method */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Payment Method</label>
//             <input
//               type="text"
//               name="paymentMethod"
//               value={''} // Replace with dynamic data if needed
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled
//             />
//           </div>
//         </div>

//         {/* Payment Status */}
//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Payment Status</label>
//           <input
//             type="text"
//             name="paymentStatus"
//             value={''} // Replace with dynamic data if needed
//             className="mt-1 p-2 w-full border rounded-md"
//             disabled
//           />
//         </div>
//       </div>

//       {/* Payment History */}
//       <div className="mt-10 p-6 bg-gray-100 shadow rounded-lg">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment History</h3>
//         <ul className="list-disc pl-6">
//           <li><strong>Date:</strong> 01/01/2024 - <strong>Amount:</strong> ₹1,000 - <strong>Status:</strong> Completed</li>
//           <li><strong>Date:</strong> 02/01/2024 - <strong>Amount:</strong> ₹500 - <strong>Status:</strong> Pending</li>
//           {/* Add more payment history entries as needed */}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default PaymentDetails;



// import React from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable, FaFilePdf, FaPrint } from 'react-icons/fa';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const people = [
//   { 
//     name: 'Anil', 
//     title: 'No.72 Jayanagar 6th block, 23rd Cross Rd, Yediyur, Bengaluru, Karnataka 560070', 
//     email: 'hello@imlystudio.com', 
//     role: '+91 9606032020',
//     paymentHistory: 'Payment 1: $100, Payment 2: $200'
//   },
//   { 
//     name: 'Peter', 
//     title: 'ground, 10/1, KV Jairam Rd, Jakkuru Layout, Jakkur, Bengaluru, Karnataka 560064', 
//     email: 'hello@imlystudio.com', 
//     role: '+91 9606032021',
//     paymentHistory: 'Payment 1: $150, Payment 2: $250'
//   },
//   { 
//     name: 'Arief', 
//     title: '208, 2nd Floor, Kedia Arcade, 92, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', 
//     email: 'hello@imlystudio.com', 
//     role: '+91 9606032022',
//     paymentHistory: 'Payment 1: $200, Payment 2: $300'
//   },
//   { 
//     name: 'Ravi', 
//     title: '1145, First Floor, Club Road 22nd Cross Rd, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', 
//     email: 'hello@imlystudio.com', 
//     role: '+91 9606032023',
//     paymentHistory: 'Payment 1: $250, Payment 2: $350'
//   },
//   { 
//     name: 'Ram', 
//     title: '519, Chinmaya Mission Hospital Rd, near Fabindia, 12th Main Road, Indiranagar, Indira Nagar 1st Stage, Defence Colony, Indiranagar, Bengaluru, Karnataka 560038', 
//     email: 'hello@imlystudio.com', 
//     role: '+91 9606032023',
//     paymentHistory: 'Payment 1: $300, Payment 2: $400'
//   },
// ];

// export default function Stores() {

//   const handleExportUsersData = () => {
//     exportToExcel(people, 'Customers');
//   };

//   const handleExportToPDF = () => {
//     const doc = new jsPDF();
//     doc.text('Stores Report', 14, 16);
//     doc.autoTable({
//       head: [['Store Manager Name', 'Location', 'Email', 'Mobile No', 'Payment History']],
//       body: people.map(person => [person.name, person.title, person.email, person.role, person.paymentHistory]),
//       startY: 20,
//     });
//     doc.save('Stores_Report.pdf');
//   };

//   const handlePrint = () => {
//     const printableContent = document.getElementById('printableTable').innerHTML;
//     const newWindow = window.open('', '', 'height=600,width=800');
//     newWindow.document.write('<html><head><title>Print Stores Report</title></head><body>');
//     newWindow.document.write(printableContent);
//     newWindow.document.write('</body></html>');
//     newWindow.document.close();
//     newWindow.print();
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Stores</h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the Stores in our account including their Manager name, location, email, mobile number, and payment history.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2">
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-brown px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportUsersData}
//           >
//             <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export to Excel
//           </button>
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportToPDF}
//           >
//             <FaFilePdf aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export to PDF
//           </button>
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handlePrint}
//           >
//             <FaPrint aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Print
//           </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table id="printableTable" className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Store Manager Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Payment History
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {people.map((person) => (
//                   <tr key={person.email}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {person.name}
//                     </td>
//                     <td className="px-3 py-4 text-sm text-gray-500 break-words max-w-xs">
//                       {person.title}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.role}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.paymentHistory}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable, FaFilePdf, FaPrint } from 'react-icons/fa';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const initialPeople = [
//   { 
//     name: 'Anil', 
//     title: 'No.72 Jayanagar 6th block, 23rd Cross Rd, Yediyur, Bengaluru, Karnataka 560070', 
//     email: 'hello@imlystudio.com', 
//     role: '+91 9606032020',
//     paymentHistory: 'Payment 1: $100, Payment 2: $200'
//   },
//   { 
//     name: 'Peter', 
//     title: 'ground, 10/1, KV Jairam Rd, Jakkuru Layout, Jakkur, Bengaluru, Karnataka 560064', 
//     email: 'hello@imlystudio.com', 
//     role: '+91 9606032021',
//     paymentHistory: 'Payment 1: $150, Payment 2: $250'
//   },
//   { 
//     name: 'Arief', 
//     title: '208, 2nd Floor, Kedia Arcade, 92, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', 
//     email: 'hello@imlystudio.com', 
//     role: '+91 9606032022',
//     paymentHistory: 'Payment 1: $200, Payment 2: $300'
//   },
//   { 
//     name: 'Ravi', 
//     title: '1145, First Floor, Club Road 22nd Cross Rd, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', 
//     email: 'hello@imlystudio.com', 
//     role: '+91 9606032023',
//     paymentHistory: 'Payment 1: $250, Payment 2: $350'
//   },
//   { 
//     name: 'Ram', 
//     title: '519, Chinmaya Mission Hospital Rd, near Fabindia, 12th Main Road, Indiranagar, Indira Nagar 1st Stage, Defence Colony, Indiranagar, Bengaluru, Karnataka 560038', 
//     email: 'hello@imlystudio.com', 
//     role: '+91 9606032023',
//     paymentHistory: 'Payment 1: $300, Payment 2: $400'
//   },
// ];

// export default function Stores() {
//   const [people, setPeople] = useState(initialPeople);
//   const [newPerson, setNewPerson] = useState({
//     name: '',
//     title: '',
//     email: '',
//     role: '',
//     paymentHistory: ''
//   });

//   const handleExportUsersData = () => {
//     exportToExcel(people, 'Customers');
//   };

//   const handleExportToPDF = () => {
//     const doc = new jsPDF();
//     doc.text('Stores Report', 14, 16);
//     doc.autoTable({
//       head: [['Store Manager Name', 'Location', 'Email', 'Mobile No', 'Payment History']],
//       body: people.map(person => [person.name, person.title, person.email, person.role, person.paymentHistory]),
//       startY: 20,
//     });
//     doc.save('Stores_Report.pdf');
//   };

//   const handlePrint = () => {
//     const printableContent = document.getElementById('printableTable').innerHTML;
//     const newWindow = window.open('', '', 'height=600,width=800');
//     newWindow.document.write('<html><head><title>Print Stores Report</title></head><body>');
//     newWindow.document.write(printableContent);
//     newWindow.document.write('</body></html>');
//     newWindow.document.close();
//     newWindow.print();
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPerson((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleCreate = () => {
//     setPeople((prev) => [...prev, newPerson]);
//     setNewPerson({
//       name: '',
//       title: '',
//       email: '',
//       role: '',
//       paymentHistory: ''
//     });
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Stores</h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the Stores in our account including their Manager name, location, email, mobile number, and payment history.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2">
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-brown px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportUsersData}
//           >
//             <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export to Excel
//           </button>
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportToPDF}
//           >
//             <FaFilePdf aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export to PDF
//           </button>
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handlePrint}
//           >
//             <FaPrint aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Print
//           </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table id="printableTable" className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Store Manager Name</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Location</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Mobile No</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Payment History</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {people.map((person, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{person.name}</td>
//                     <td className="px-3 py-4 text-sm text-gray-500 break-words max-w-xs">{person.title}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.paymentHistory}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8">
//         <h3 className="text-lg font-semibold mb-2">Add New Store</h3>
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           <input
//             type="text"
//             name="name"
//             value={newPerson.name}
//             onChange={handleInputChange}
//             placeholder="Store Manager Name"
//             className="border rounded p-2"
//           />
//           <input
//             type="text"
//             name="title"
//             value={newPerson.title}
//             onChange={handleInputChange}
//             placeholder="Location"
//             className="border rounded p-2"
//           />
//           <input
//             type="email"
//             name="email"
//             value={newPerson.email}
//             onChange={handleInputChange}
//             placeholder="Email"
//             className="border rounded p-2"
//           />
//           <input
//             type="text"
//             name="role"
//             value={newPerson.role}
//             onChange={handleInputChange}
//             placeholder="Mobile No"
//             className="border rounded p-2"
//           />
//           <input
//             type="text"
//             name="paymentHistory"
//             value={newPerson.paymentHistory}
//             onChange={handleInputChange}
//             placeholder="Payment History"
//             className="border rounded p-2"
//           />
//         </div>
//         <button
//           type="button"
//           onClick={handleCreate}
//           className="mt-4 inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Create
//         </button>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable, FaFilePdf, FaPrint } from 'react-icons/fa';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const initialPayments = [
//   { 
//     name: 'Anil', 
//     email: 'anil@domain.com', 
//     mobileNo: '+91 9606032020',
//     advance: 1000,
//     total: 5000,
//     numberOfPayments: 5
//   },
//   { 
//     name: 'Peter', 
//     email: 'peter@domain.com', 
//     mobileNo: '+91 9606032021',
//     advance: 1500,
//     total: 6000,
//     numberOfPayments: 4
//   },
//   { 
//     name: 'Arief', 
//     email: 'arief@domain.com', 
//     mobileNo: '+91 9606032022',
//     advance: 2000,
//     total: 7000,
//     numberOfPayments: 3
//   },
//   { 
//     name: 'Ravi', 
//     email: 'ravi@domain.com', 
//     mobileNo: '+91 9606032023',
//     advance: 2500,
//     total: 8000,
//     numberOfPayments: 6
//   },
//   { 
//     name: 'Ram', 
//     email: 'ram@domain.com', 
//     mobileNo: '+91 9606032024',
//     advance: 3000,
//     total: 9000,
//     numberOfPayments: 7
//   },
// ];

// export default function Payments() {
//   const [payments, setPayments] = useState(initialPayments);
//   const [newPayment, setNewPayment] = useState({
//     name: '',
//     email: '',
//     mobileNo: '',
//     advance: '',
//     total: '',
//     numberOfPayments: ''
//   });

//   const handleExportPaymentsData = () => {
//     exportToExcel(payments, 'Payments');
//   };

//   const handleExportToPDF = () => {
//     const doc = new jsPDF();
//     doc.text('Payments Report', 14, 16);
//     doc.autoTable({
//       head: [['Name', 'Location', 'Email', 'Mobile No', 'Advance', 'Total', 'Number of Payments']],
//       body: payments.map(payment => [
//         payment.name, 
//         payment.email, 
//         payment.mobileNo, 
//         payment.advance, 
//         payment.total, 
//         payment.numberOfPayments
//       ]),
//       startY: 20,
//     });
//     doc.save('Payments_Report.pdf');
//   };

//   const handlePrint = () => {
//     const printableContent = document.getElementById('printableTable').innerHTML;
//     const newWindow = window.open('', '', 'height=600,width=800');
//     newWindow.document.write('<html><head><title>Print Payments Report</title></head><body>');
//     newWindow.document.write(printableContent);
//     newWindow.document.write('</body></html>');
//     newWindow.document.close();
//     newWindow.print();
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPayment((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleCreate = () => {
//     setPayments((prev) => [...prev, newPayment]);
//     setNewPayment({
//       name: '',
//       email: '',
//       mobileNo: '',
//       advance: '',
//       total: '',
//       numberOfPayments: ''
//     });
//   };

//   return (
//     <div className="p-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900">Payments</h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all payment details including name, location, email, mobile number, and payment history.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//           <div className="flex gap-x-4">
//             <button
//               type="button"
//               onClick={handleExportPaymentsData}
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//               Export to Excel
//             </button>
//             <button
//               type="button"
//               onClick={handleExportToPDF}
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               <FaFilePdf aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//               Export to PDF
//             </button>
//             <button
//               type="button"
//               onClick={handlePrint}
//               className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               <FaPrint aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//               Print
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div id="printableTable" className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Location</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Mobile No</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Advance</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total</th>
//                   <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Number of Payments</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {payments.map((payment, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{payment.name}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{payment.email}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{payment.mobileNo}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹{payment.advance}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹{payment.total}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{payment.numberOfPayments}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8">
//         <h3 className="text-lg font-medium text-gray-900">Add New Payment</h3>
//         <div className="mt-4">
//           <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={newPayment.name}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
           
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={newPayment.email}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile No</label>
//               <input
//                 type="text"
//                 name="mobileNo"
//                 id="mobileNo"
//                 value={newPayment.mobileNo}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="advance" className="block text-sm font-medium text-gray-700">Advance</label>
//               <input
//                 type="number"
//                 name="advance"
//                 id="advance"
//                 value={newPayment.advance}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="total" className="block text-sm font-medium text-gray-700">Total</label>
//               <input
//                 type="number"
//                 name="total"
//                 id="total"
//                 value={newPayment.total}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="numberOfPayments" className="block text-sm font-medium text-gray-700">Number of Payments</label>
//               <input
//                 type="number"
//                 name="numberOfPayments"
//                 id="numberOfPayments"
//                 value={newPayment.numberOfPayments}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
//               />
//             </div>
//           </div>
//           <button
//             type="button"
//             onClick={handleCreate}
//             className="mt-4 inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Add Payment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { FaTable, FaFilePdf, FaPrint } from 'react-icons/fa';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const initialPayments = [
  { 
    name: 'Anil', 
    mobileNo: '+91 9606032020',
    itemType: 'Electronics',
    advance: 1000,
    total: 5000,
    balanceAmount: 4000,
    storeName: 'Store A'
  },
  { 
    name: 'Peter', 
    mobileNo: '+91 9606032021',
    itemType: 'Furniture',
    advance: 1500,
    total: 6000,
    balanceAmount: 4500,
    storeName: 'Store B'
  },
  { 
    name: 'Arief', 
    mobileNo: '+91 9606032022',
    itemType: 'Clothing',
    advance: 2000,
    total: 7000,
    balanceAmount: 5000,
    storeName: 'Store C'
  },
  { 
    name: 'Ravi', 
    mobileNo: '+91 9606032023',
    itemType: 'Appliances',
    advance: 2500,
    total: 8000,
    balanceAmount: 5500,
    storeName: 'Store D'
  },
  { 
    name: 'Ram', 
    mobileNo: '+91 9606032024',
    itemType: 'Books',
    advance: 3000,
    total: 9000,
    balanceAmount: 6000,
    storeName: 'Store E'
  },
];

export default function Payments() {
  const [payments, setPayments] = useState(initialPayments);
  const [newPayment, setNewPayment] = useState({
    name: '',
    mobileNo: '',
    itemType: '',
    advance: '',
    total: '',
    balanceAmount: '',
    storeName: ''
  });

  const handleExportPaymentsData = () => {
    exportToExcel(payments, 'Payments');
  };

  const handleExportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Payments Report', 14, 16);
    doc.autoTable({
      head: [['Name', 'Mobile No', 'Item Type', 'Advance', 'Total', 'Balance Amount', 'Store Name']],
      body: payments.map(payment => [
        payment.name, 
        payment.mobileNo, 
        payment.itemType, 
        payment.advance, 
        payment.total, 
        payment.balanceAmount,
        payment.storeName
      ]),
      startY: 20,
    });
    doc.save('Payments_Report.pdf');
  };

  const handlePrint = () => {
    const printableContent = document.getElementById('printableTable').innerHTML;
    const newWindow = window.open('', '', 'height=600,width=800');
    newWindow.document.write('<html><head><title>Print Payments Report</title></head><body>');
    newWindow.document.write(printableContent);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
  };

  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayment((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreate = () => {
    setPayments((prev) => [...prev, newPayment]);
    setNewPayment({
      name: '',
      mobileNo: '',
      itemType: '',
      advance: '',
      total: '',
      balanceAmount: '',
      storeName: ''
    });
  };

  return (
    <div className="p-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900">Payments</h2>
          <p className="mt-2 text-sm text-gray-700">
            A list of all payment details including name, mobile number, item type, advance, total, balance amount, and store name.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div className="flex gap-x-4">
            <button
              type="button"
              onClick={handleExportPaymentsData}
              className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
              Export to Excel
            </button>
            <button
              type="button"
              onClick={handleExportToPDF}
              className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FaFilePdf aria-hidden="true" className="-ml-0.5 h-4 w-4" />
              Export to PDF
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FaPrint aria-hidden="true" className="-ml-0.5 h-4 w-4" />
              Print
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div id="printableTable" className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Mobile No</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Item Type</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Advance</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Balance Amount</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Store Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payments.map((payment, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{payment.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{payment.mobileNo}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{payment.itemType}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹{payment.advance}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹{payment.total}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹{payment.balanceAmount}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{payment.storeName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900">Add New Payment</h3>
        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={newPayment.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile No</label>
              <input
                type="text"
                name="mobileNo"
                id="mobileNo"
                value={newPayment.mobileNo}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="itemType" className="block text-sm font-medium text-gray-700">Item Type</label>
              <input
                type="text"
                name="itemType"
                id="itemType"
                value={newPayment.itemType}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="advance" className="block text-sm font-medium text-gray-700">Advance</label>
              <input
                type="number"
                name="advance"
                id="advance"
                value={newPayment.advance}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="total" className="block text-sm font-medium text-gray-700">Total</label>
              <input
                type="number"
                name="total"
                id="total"
                value={newPayment.total}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="balanceAmount" className="block text-sm font-medium text-gray-700">Balance Amount</label>
              <input
                type="number"
                name="balanceAmount"
                id="balanceAmount"
                value={newPayment.balanceAmount}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
              />
            </div>
            <div>
              <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">Store Name</label>
              <input
                type="text"
                name="storeName"
                id="storeName"
                value={newPayment.storeName}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border rounded p-2"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="button"
                onClick={handleCreate}
                className="inline-flex justify-center w-1/2 rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
