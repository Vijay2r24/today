// import React from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable } from 'react-icons/fa';

// const people = [
//   // Example data structure
//   { name: 'Anilkumar ', title: 'No.72 Jayanagar 6th block, Bengaluru, Karnataka 560070', email: 'hello@imlystudio.com', role: '+91 9606032020' },
//   { name: 'PeterJhon ', title: 'ground, 10/1, Jakkuru Layout, Jakkur, Bengaluru, Karnataka 560064', email: 'hello@imlystudio.com', role: '+91 9606032021' },
//   { name: 'AriefShaik ', title: '208, 2nd Floor, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', email: 'hello@imlystudio.com', role: '+91 9606032022' },
//   { name: 'RaviVarma ', title: '1145, First Floor,  24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', email: 'hello@imlystudio.com', role: '+91 9606032023' },
//   { name: 'RamKumar', title: '519, Chinmaya Mission Hospital Rd, 12th Main Road, Indiranagar, Bengaluru, Karnataka 560038', email: 'hello@imlystudio.com', role: '+91 9606032023' },
 
//   // Add more people as needed
// ];

// export default function Stores() {

//   const handleExportUsersData =  () => {
//     exportToExcel(people, 'Customers');
//   };
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };
  
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           {/* <h1 className="text-base font-semibold leading-6 text-custom-heading">Users</h1> */}
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Stores</h2>

//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the Stores in our account including their Managername, location, email, and mobileno.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//           <button
//         type="button"
//         className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         onClick={handleExportUsersData}
//       >
//         <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//         Export Stores Details
//       </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                   Store Manager  Name
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
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
// Location                  </th>
                 
//                   {/* <th
//                     scope="col"
//                     className="relative py-3.5 pl-3 pr-4 sm:pr-0"
//                   >
//                      <span className="sr-only">Edit</span> 
//                   </th> */}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {people.map((person) => (
//                   <tr key={person.email}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {person.name}
//                     </td>
                   
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.role}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.title}
//                     </td>
//                     {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                       <a href="#" className="text-indigo-600 hover:text-indigo-900">
//                         Edit <span className="sr-only">, {person.name}</span>
//                       </a>
//                     </td> */}
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
// import { FaTable } from 'react-icons/fa';
// import { MdAddToPhotos, MdEdit, MdDelete } from 'react-icons/md';
 
// // const people = [
// //   { name: 'Arief', title: '208, 2nd Floor, Kedia Arcade, 92, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', email: 'hello@imlystudio.com', role: '+91 9606032022' },
// //   { name: 'Ravi', title: '1145, First Floor, Club Road 22nd Cross Rd, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', email: 'hello@imlystudio.com', role: '+91 9606032023' },
// //   { name: 'Ram', title: '519, Chinmaya Mission Hospital Rd, 12th Main Road, Indiranagar, Indira Nagar 1st Stage, Indiranagar, Bengaluru, Karnataka 560038', email: 'hello@imlystudio.com', role: '+91 9606032023' },
// // ];
 
// export default function Stores() {
//   const [showForm, setShowForm] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [storeManagers, setStoreManagers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     email: "",
//     mobile: "",
//   });
 
//   // const handleExportUsersData = () => {
//   //   const allData = [...people, ...storeManagers];
//   //   exportToExcel(allData, 'StoreManagers');
//   // };
//   const handleExportUsersData = () => {
//     const allData = [ ...storeManagers];
//     exportToExcel(allData, 'StoreManagers');
//   };
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data.map(item => ({
//       'Store Manager Name': item.name,
//       'Location': item.title || item.location,
//       'Email': item.email,
//       'Mobile No': item.role || item.mobile
//     })));
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };
 
//   const handleStoreManagerClick = () => {
//     setShowForm(!showForm);
//     setEditIndex(null); // Reset edit index when showing form
//   };
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editIndex !== null && storeManagers[editIndex]) {
//       // Editing an existing store manager
//       const updatedManagers = [...storeManagers];
//       updatedManagers[editIndex] = formData;
//       setStoreManagers(updatedManagers);
//     } else {
//       // Adding a new store manager
//       setStoreManagers([...storeManagers, formData]);
//     }
//     setFormData({ name: '', location: '', email: '', mobile: '' });
//     setShowForm(false);
//   };
 
//   const handleEdit = (index) => {
//     if (index >= 0 && index < storeManagers.length) {
//       setFormData(storeManagers[index]);
//       setEditIndex(index);
//       setShowForm(true);
//     } else {
//       console.error('Invalid edit index');
//     }
//   };
 
//   const handleDelete = (index) => {
//     if (index >= 0 && index < storeManagers.length) {
//       const updatedManagers = storeManagers.filter((_, i) => i !== index);
//       setStoreManagers(updatedManagers);
//     } else {
//       console.error('Invalid delete index');
//     }
//   };
 
//   // const allManagers = [...people, ...storeManagers];
//   const allManagers = [ ...storeManagers];
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">
//             Stores
//           </h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the Stores in our account including their Manager
//             name, location, email, and mobile number.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex sm:flex-row sm:space-x-4">
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//             onClick={handleExportUsersData}
//           >
//             <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export Stores Details
//           </button>
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
//             onClick={handleStoreManagerClick}
//           >
//             <MdAddToPhotos aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             {editIndex !== null ? 'Edit Store Manager' : 'Add Store Manager'}
//           </button>
//         </div>
//       </div>
// {showForm && (
//   <div className="mt-4 p-4 bg-white shadow-md rounded-md max-w-lg mx-auto">
//     <form onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Store Manager Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="mt-1 block w-full sm:w-80 md:w-64 lg:w-80 xl:w-96 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//           placeholder="Enter name"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Location
//         </label>
//         <input
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           className="mt-1 block w-full sm:w-80 md:w-64 lg:w-80 xl:w-96 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//           placeholder="Enter location"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="mt-1 block w-full sm:w-80 md:w-64 lg:w-80 xl:w-96 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//           placeholder="Enter email"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Mobile Number
//         </label>
//         <input
//           type="tel"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           className="mt-1 block w-full sm:w-80 md:w-64 lg:w-80 xl:w-96 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
//           placeholder="Enter mobile number"
//         />
//       </div>
 
//       <button
//         type="submit"
//         className="items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 mx-auto block"
//       >
//         {editIndex !== null ? 'Update Manager' : 'Add Manager'}
//       </button>
//     </form>
//   </div>
// )}
 
 
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Manager Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Edit
//                   </th>
//                   <th
//                     scope="col"
//                     className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Delete
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {allManagers.map((manager, index) => (
//                   <tr key={index}>
//                     <td className="py-3.5 px-4 text-sm text-gray-900">
//                       {manager.name}
//                     </td>
//                     <td className="py-3.5 px-4 text-sm text-gray-900">
//                       {manager.title || manager.location}
//                     </td>
//                     <td className="py-3.5 px-4 text-sm text-gray-900">
//                       {manager.email}
//                     </td>
//                     <td className="py-3.5 px-4 text-sm text-gray-900">
//                       {manager.role || manager.mobile}
//                     </td>
//                     <td className="py-3.5 px-4 text-sm text-gray-900">
//                       <button
//                         type="button"
//                         onClick={() => handleEdit(index)}
//                         className="text-blue-500 hover:text-blue-700"
//                       >
//                         <MdEdit aria-hidden="true" className="h-5 w-5" />
//                       </button>
//                       </td>
//                       <td className="py-3.5 px-4 text-sm text-gray-900">
//                       <button
//                         type="button"
//                         onClick={() => handleDelete(index)}
//                         className="text-red-500 hover:text-red-700 ml-2"
//                       >
//                         <MdDelete aria-hidden="true" className="h-5 w-5" />
//                       </button>
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
 
 

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import p1 from "../../assests/Images/Happy.png";
import p2 from "../../assests/Images/Happy.png";
import p3 from "../../assests/Images/Happy.png";
import { FaTable, FaEdit, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import * as XLSX from 'xlsx';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import { FaFilter } from 'react-icons/fa';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#003375', // Dark blue color
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const initialPeople = [
  {
    name: "Jane Smith",
    title: "Chennai",
    email: "jane.smith@example.com",
    role: "7702253548",
    gender: "Male",
    profileImg: p1,
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
  },
  {
    name: "Alice Johnson",
    title: "Hyderabad",
    email: "alice.johnson@example.com",
    role: "7702253549",
    gender: "Female",
    profileImg: p2,
    addressLine1: "456 Oak St",
    addressLine2: "Suite 12",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
  },
  {
    name: "Robert Brown",
    title: "Mumbai",
    email: "robert.brown@example.com",
    role: "7702253550",
    gender: "Female",
    profileImg: p3,
    addressLine1: "789 Pine St",
    addressLine2: "",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  {
    name: "Michael Davis",
    title: "Delhi",
    email: "michael.davis@example.com",
    role: "7702253551",
    gender: "Male",
    addressLine1: "101 Maple St",
    addressLine2: "Apt 3C",
    city: "Delhi",
    state: "Delhi",
    country: "India",
  },
];

export default function User(props) {
  const [people, setPeople] = useState(initialPeople);
  const [formData, setFormData] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');


  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profileImg: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedPeople = [...people];
      updatedPeople[editingIndex] = formData;
      setPeople(updatedPeople);
      setEditingIndex(null);
    } else {
      setPeople([...people, formData]);
    }
    setFormData(null);
    setIsFormVisible(false);
  };

  // Handle cancel button click
  const handleCancel = () => {
    setFormData(null);
    setEditingIndex(null);
    setIsFormVisible(false);
  };

  // Handle add user button click
  const handleAddUserClick = () => {
    setFormData({
      name: "",
      title: "",
      email: "",
      role: "",
      gender: "",
      profileImg: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
    });
    setEditingIndex(null);
    setIsFormVisible(true);
  };
  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };
  const handleExportUsersData = () => {
    exportToExcel(people, 'Customers');
  };

  // Handle edit button click
  const handleEditClick = (index) => {
    setFormData(people[index]);
    setEditingIndex(index);
    setIsFormVisible(true);
  };

  // Handle delete button click
  const handleDeleteClick = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   // Example if using useState
  const [paginatedPeople, setPaginatedPeople] = useState([]);

  // Pagination calculations
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - people.length) : 0;

  // Handle search functionality
  const handleSearch = () => {
    const filteredPeople = people.filter(person =>
      person.name.toLowerCase().includes(searchName.toLowerCase()) &&
      person.email.toLowerCase().includes(searchEmail.toLowerCase())
    );
    setPaginatedPeople(filteredPeople.slice(0, rowsPerPage));
  };

  // Handle page change (e.g., when user clicks to go to the next page)
  const handlePageChange = (newPage) => {
    setPage(newPage);
    setPaginatedPeople(
      people.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage)
    );
  };

  // Handle rows per page change (if you're allowing the user to change this)
  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setPaginatedPeople(
      people.slice(page * newRowsPerPage, page * newRowsPerPage + newRowsPerPage)
    );
  };

  // Initial pagination setup or when data changes
  useEffect(() => {
    setPaginatedPeople(
      people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [people, page, rowsPerPage]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      {/* Conditional Rendering */}
      {!isFormVisible ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Stores</h2>
            <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
              <li>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  onClick={handleAddUserClick}
                >
                  <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                  Add Managers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
                  onClick={handleExportUsersData}
                >
                  <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                  Export Managers
                </button>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <div className="flex items-center space-x-8">
              <div className="flex flex-col w-[35rem]">
                <label
                  htmlFor="searchName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Search Manager Name
                </label>
                <input
                  id="searchName"
                  type="text"
                  placeholder="Search by name"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col w-[25rem]">
                <label
                  htmlFor="searchEmail"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Search by Email
                </label>
                <input
                  id="searchEmail"
                  type="text"
                  placeholder="Search by email"
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="px-6 py-3 flex items-center space-x-2 rounded-md bg-indigo-600 text-white text-sm font-medium"
                  onClick={handleSearch}
                >
                  <FaFilter className="h-3 w-3" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>
          <TableContainer component={Paper} className="mt-4">
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Mobile No</StyledTableCell>
                  <StyledTableCell>Address</StyledTableCell>
                  <StyledTableCell>Gender</StyledTableCell>
                  <StyledTableCell>Edit</StyledTableCell>
                  <StyledTableCell>Delete</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedPeople.map((person, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>
                      <div className="flex items-center space-x-4">
                        <Avatar src={person.profileImg} />
                        <span>{person.name}</span>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell>{person.email}</StyledTableCell>
                    <StyledTableCell>{person.role}</StyledTableCell>
                    <StyledTableCell>
                      {person.addressLine1}
                      {person.addressLine2 && `, ${person.addressLine2}`}
                      <br />
                      {person.city}, {person.state}, {person.country}
                    </StyledTableCell>
                    {/* <StyledTableCell>{person.gender}</StyledTableCell> */}
                    <StyledTableCell>
                      <span
                        className={`inline-block px-3 py-2 text-xs font-semibold rounded-full ${person.gender === "Male"
                            ? "bg-green-100 text-green-800 shadow-md"
                            : person.gender === "Female"
                              ? "bg-pink-100 text-pink-800 shadow-md"
                              : "bg-gray-100 text-gray-800 shadow-md"
                          }`}
                      >
                        {person.gender}
                      </span>
                    </StyledTableCell>
                    <StyledTableCell>



                      <div
                        className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-blue-100 text-blue-800 shadow-md"
                        onClick={() => handleEditClick(index)}
                      >
                        <FaEdit className="w-4 h-4" />
                      </div>



                    </StyledTableCell>
                    <StyledTableCell>

                      <div
                        className="inline-flex items-center justify-center w-14 h-7 cursor-pointer rounded-lg bg-pink-100 text-red-500 shadow-md"
                        onClick={() => handleDeleteClick(index)}
                      >
                        <FaTrash className="w-4 h-4" />
                      </div>

                      {/* </Tooltip> */}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {emptyRows > 0 && (
                  <StyledTableRow style={{ height: 53 * emptyRows }}>
                    <StyledTableCell colSpan={6} />
                  </StyledTableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={people.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  // ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      ) : (

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              {/* Form Fields */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData?.name || ""}
                  onChange={handleFormChange}
                  required
                  pattern="[A-Za-z\s]+"
                  title="Name should only contain letters and spaces."
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData?.email || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile No
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData?.role || ""}
                  onChange={handleFormChange}
                  required
                  pattern="\d{10}"
                  title="Mobile No should be 10 digits."
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 sm:text-sm"
                >
                  <option value="">Select Gender</option>
                  <option
                    value="Male"
                    className="bg-green-100 text-green-800 shadow-sm"
                  >
                    Male
                  </option>
                  <option
                    value="Female"
                    className="bg-pink-100 text-pink-800 shadow-sm"
                  >
                    Female
                  </option>
                </select>
              </div>

              {/* Additional fields for address */}
              <div>
                <label
                  htmlFor="addressLine1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address Line 1
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData?.addressLine1 || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="addressLine2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData?.addressLine2 || ""}
                  onChange={handleFormChange}
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData?.city || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData?.state || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData?.country || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="profileImg"
                  className="block text-sm font-medium text-gray-700"
                >
                  Profile Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1 block w-full text-sm text-gray-500"
                />
                {formData?.profileImg && (
                  <img
                    src={formData.profileImg}
                    alt="Profile"
                    className="mt-2 w-24 h-24 object-cover rounded-md"
                  />
                )}
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >

                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
