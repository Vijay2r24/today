
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
            <h2 className="text-xl font-semibold">Customer List</h2>
            <ul className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2 list-none">
              <li>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  onClick={handleAddUserClick}
                >
                  <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                  Add Customer
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"
                  onClick={handleExportUsersData}
                >
                  <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                  Export Customer
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
                  Search Customer Name
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

