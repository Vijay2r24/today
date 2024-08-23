

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {   MdArrowBackIosNew, MdDelete, MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import TablePagination from '@mui/material/TablePagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import {
  Combobox,

} from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';


const categories = [
  { id: 1, name: 'Walk-in', subOptions: ["Newspaper ad"] },
  { id: 2, name: 'Social Media', subOptions: ['Google', 'Facebook', 'Instagram'] },
  { id: 3, name: 'Reference', subOptions: ['Existing Client', 'Directors', 'Employee'] },
];
const steps = ['Order Details', 'Design', 'Order Status', "payments"];

function AddOrders() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [orders, setOrders] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');

  const filteredCategories = query === ''
    ? categories
    : categories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );

  const subOptions = selectedCategory
    ? categories.find(cat => cat.id === selectedCategory.id)?.subOptions || []
    : [];
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    orderStatus: '',
    email: '',
    deliveryDate: '',
    phone: '',
    address: '',
    address1:"",
    city:"",
    state: "",
    zipcode:"",
    createdBy: '',
    design: '',
    type: '',
    categories:"",
    length: '',
    height: '',
    width: '',
    totalAmount:"",
    advanceAmount:"",
    installments:"",
    comments:"",
    orderStatusComments:"",
    startdate:"",
    enddate:"",
    paymentstype:"",
    finalLength:"",
    finalHeight:"",
    finalWidth:"",
  });
  const handleCategoryChange = (category) => {
    setQuery('');
    setSelectedCategory(category);
    setSelectedSubOption(''); // Reset sub-option when category changes
    setOrderDetails(prevDetails => ({
      ...prevDetails,
      categories: category ? category.name : ''
    }));
  };
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState(null);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);



  const handleReset = () => setActiveStep(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 6) {
      alert('You can only upload up to 6 images.');
      return;
    }
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
    setImagePreviews([...imagePreviews, ...newImages.map((img) => img.preview)]);
  };

  const handleImageRemove = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!orderDetails.name) newErrors.name = 'Name is required';
    if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
    if (!orderDetails.email) newErrors.email = 'Email is required';
    if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
    if (!orderDetails.phone) newErrors.phone = 'Phone is required';
    if (!orderDetails.address) newErrors.address = 'Address line1 is required';
    if (!orderDetails.address1) newErrors.address1 = 'Address line2 is required';
    if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
    if (!orderDetails.design) newErrors.design = 'Design is required';
    if (!orderDetails.type) newErrors.type = 'Type is required';
    if (!orderDetails.categories) newErrors.categories = 'categories is required';
    if (!selectedSubOption) newErrors.subOption = 'Sub-option is required';
    if (!orderDetails.city) newErrors.city = 'City is required';
    if (!orderDetails.state) newErrors.state = 'State is required';
    if (!orderDetails.length) newErrors.length = 'length is required';
    if (!orderDetails.width) newErrors.width = 'width is required';
    if (!orderDetails.totalAmount) newErrors.totalAmount = 'TotalAmount is required';
    if (!orderDetails.advanceAmount) newErrors.advanceAmount = 'Advance Amount is required';
    if (!orderDetails.installments) newErrors.installments = 'installments is required';
    if (!orderDetails.comments) newErrors.comments = 'Comments is required';
    if (!orderDetails. orderStatusComments) newErrors.orderStatusComments = 'Comments is required';
    if (!orderDetails.startdate) newErrors.startdate = 'StartDate is required';
    if (!orderDetails.enddate) newErrors.enddate = 'EndDate is required';
    if (!orderDetails.paymentstype) newErrors.paymentstype = 'Payments Type is required'; 
    if (!orderDetails.finalLength) newErrors.finalLength = 'Final length is required';
    if (!orderDetails.finalWidth) newErrors.finalWidth = 'Final Width is required';
    if (!orderDetails.finalHeight) newErrors.finalHeight = 'Final height is required';


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fill in all required fields.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
      return;
    }

    setSubmittedDetails({ ...orderDetails, images: imagePreviews, category: selectedCategory?.name || '', subOption: selectedSubOption || ''}); // Store the submitted details including image previews
    setShowAlert(true);

    setOrderDetails({
      name: '',
      orderStatus: '',
      email: '',
      deliveryDate: '',
      phone: '',
      address: '',
      address1: '',
      city: '',
      state: '',
      zipcode:"",
      createdBy: '',
      design: '',
      type: '',
      categories: '',
      length: '',
      height: '',
      width: '',
      totalAmount: '',
      advanceAmount: '',
      installments:"",
      comments:"",
      orderStatusComments:"",
      startdate: "",
      enddate: "",
      paymentstype: "",
      finalLength: "",
      finalHeight: "",
      finalWidth: "",
    });
    setImages([]);
    setImagePreviews([]);
    setSelectedSubOption('');

    setActiveStep(0);  // Reset stepper to first step
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  const handleCancel = () => {
    setOrderDetails({
      name: '',
      email: '',
      phone: '',
      address: '',
      address1: '',
      city: '',
      state: '',
      zipcode: '',
      orderStatus: '',
      createdBy: '',
      deliveryDate: '',
      design: '',
      type: '',
      categories: '',
      subOption: '',
      images: [],
      length: '',
      height: '',
      width: '',
      totalAmount: '',
      advanceAmount: '',
      installments:'',
      comments:'',
      orderStatusComments:'',
      startdate: '',
      enddate: '',
      paymentstype: '',
      finalHeight:"",
      finalWidth:"",
      finalLength: '',
      pdfPreview :"",
    });
    setActiveStep(0); // Optional: Reset to the first step
  };

  const amountToBePaid = orderDetails.totalAmount - orderDetails.advanceAmount;
 const remainder = amountToBePaid / orderDetails.installments;
 const [showSearchCard, setShowSearchCard] = useState(false);

 const handleAddOrder = () => {
  // Validate the form fields
  const newErrors = {};
  if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
  if (!orderDetails.createdBy) newErrors.createdBy = 'Assign To is required';
  if (!orderDetails.startdate) newErrors.startdate = 'Start Date is required';
  if (!orderDetails.enddate) newErrors.enddate = 'End Date is required';
  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    // Add the order to the orders array
    setOrders([...orders, orderDetails]);

    // Clear the form fields
    setOrderDetails({
      orderStatus: '',
      createdBy: '',
      startdate: '',
      enddate: '',
      orderStatusComments: ''
    });
  }
};


 const handleExistingUserClick = () => {
     setShowSearchCard(!showSearchCard);
 };
 
 const handleAddOrder1 = () => {
  // Validate the form fields
  const newErrors = {};
  if (!orderDetails.totalAmount) newErrors.totalAmount = 'Total amount is required';
  if (!orderDetails.advanceAmount) newErrors.advanceAmount = 'Advance amountTo is required';
  if (!orderDetails.paymentstype) newErrors.paymentstype = 'Payments Type is required';
  if (!orderDetails.installments) newErrors.installments = 'Installments Type is required';

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    // Add the order to the orders array
    setOrders([...orders, orderDetails]);

    // Clear the form fields
    setOrderDetails({
      totalAmount: '',
      advanceAmount: '',
      paymentstype: '',
      installments: '',
      balanceAmount: '',
      installmentPerMonths:"",
    });
  }
};

const [pdfFile, setPdfFile] = useState(null);
  const [pdfPreview, setPdfPreview] = useState('');
  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPdfFile(file);
      setPdfPreview(URL.createObjectURL(file));
    }
  };

  const handlePdfRemove = () => {
    setPdfFile(null);
    setPdfPreview('');
  };

  return (
    <>
    <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8   rounded-lg">
            {/* Button at the top */}
            <div className="flex justify-end mt-4">

            <button 
                onClick={handleExistingUserClick} 
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 "
            >
                Existing User
            </button>
            <ToastContainer />

            </div>

            {/* Search Card */}
            {showSearchCard && (
                <div className="mt-4 p-4 border rounded shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Search User</h2>
                    <input 
                        type="text" 
                        placeholder="Search by email or mobile number" 
                        className="w-full p-2 border rounded mb-4"
                    />
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Search
                    </button>
                </div>
            )}
        </div>
    <div className="p-6 mr-10 mb-7 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">

            <Box sx={{ width: '100%' }}>
  <Stepper activeStep={activeStep} className="mb-6" alternativeLabel>
    {steps.map((label, index) => {
      const stepProps = {};
      const labelProps = {};
      if (isStepOptional(index)) {
        // Optional step logic
      }
      if (isStepSkipped(index)) {
        stepProps.completed = false;
      }
      return (
        <Step key={label} {...stepProps}>
          <StepLabel {...labelProps}>
            {label} {/* Label for the step */}
          </StepLabel>
        </Step>
      );
    })}
  </Stepper>
  {activeStep === steps.length ? (
    <React.Fragment>
      <Typography className="text-center text-xl mb-4">
        All steps completed - you're finished
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
        <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
          Reset
        </Button>
      </Box>
    </React.Fragment>
  ) : (
    <React.Fragment>
      {/* <Typography className="text-center text-lg mb-4">
        Step {activeStep + 1}: {steps[activeStep]}
      </Typography> */}
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // Ensure proper grid layout
          gap: 2, // Adjust spacing between items
          pt: 2 
        }}
      >
      
              {activeStep === 0 && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={orderDetails.name}
                      onChange={handleChange}
                      className={` p-1 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Address line1</label>
                    <input
                      type="text"
                      name="address"
                      value={orderDetails.address}
                      onChange={handleChange}
                      className={`p-1 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={orderDetails.phone}
                      onChange={handleChange}
                      className={` p-1 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Address line2</label>
                    <input
                      type="text"
                      name="address1"
                      value={orderDetails.address1}
                      onChange={handleChange}
                      className={` p-1 w-full border rounded-md ${errors.address1 ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
                  </div>
       
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={orderDetails.email}
                      onChange={handleChange}
                      className={` p-1 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      name="city"
                      value={orderDetails.city}
                      onChange={handleChange}
                      className={` p-1 w-full border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">State</label>
                    <input
                      type="text"
                      name="state"
                      value={orderDetails.state}
                      onChange={handleChange}
                      className={` p-1 w-full border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Zipcode</label>
                    <input
                      type="number"
                      name="zipcode"
                      value={orderDetails.zipcode}
                      onChange={handleChange}
                      className={` p-1 w-full border rounded-md ${errors.zipcode ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
                  </div>
                  
    <div>
                    <label className="block text-xs font-medium text-gray-700">Type</label>
                    <select
                      name="type"
                      value={orderDetails.type}
                      onChange={handleChange}
                      className={` p-1 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="select a type">Select a Type</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Wardrobe">Wardrobe</option>
                      <option value="Living">Living</option>
                    </select>
                    {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Expected Delivery Date</label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={orderDetails.deliveryDate}
                      onChange={handleChange}
                      className={` p-1 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Comments</label>
                    <input
                      type="text"
                      name="comments"
                      value={orderDetails.comments}
                      onChange={handleChange}
                      className={` p-1 w-full border rounded-md ${errors.comments ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.comments && <p className="text-red-500 text-sm mt-1">{errors.comments}</p>}
                  </div>
                  <div className="mb-4">
      <label className="block text-xs font-medium text-gray-700">Referred By</label>
      <Combobox
        as="div"
        value={selectedCategory}
        onChange={handleCategoryChange}

      >
        <div className="relative ">
          <Combobox.Input
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(category) => category?.name}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>

          {filteredCategories.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredCategories.map((category) => (
                <Combobox.Option
                  key={category.id}
                  value={category}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                >
                  <span className="block truncate group-data-[selected]:font-semibold">
                    {category.name}
                  </span>

                  <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>

      {selectedCategory && subOptions.length > 0 && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Sub-Category</label>
          <Combobox
            as="div"
            value={selectedSubOption}
            onChange={setSelectedSubOption}
          >
            <div className="relative mt-2">
              <Combobox.Input
                className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(subOption) => subOption}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </Combobox.Button>

              {subOptions.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {subOptions.map((option, index) => (
                    <Combobox.Option
                      key={index}
                      value={option}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                    >
                      <span className="block truncate group-data-[selected]:font-semibold">
                        {option}
                      </span>

                      <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </div>
          </Combobox>
        </div>
      )}
    {/* {errors.categories && <p className="text-red-500 text-sm mt-1">{errors.categories}</p>} */}

    </div>
                </>
              )}
                     </Box>
                     <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // Ensure proper grid layout
          gap: 2, // Adjust spacing between items
          pt: 2 
        }}
      >
              {activeStep === 1 && (
                <>
                 
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Design</label>
                    <input
                      type="text"
                      name="design"
                      value={orderDetails.design}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
                  </div>
<br/>

    {/* <div>
    <h2 className="text-lg font-semibold text-gray-700 mb-4">Initial Measurement</h2>

      <label className="block text-sm font-medium text-gray-700">Length (cm)</label>
      <input
        type="number"
        name="length"
        value={orderDetails.length}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md ${errors.length ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.length && <p className="text-red-500 text-sm mt-1">{errors.length}</p>}
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mt-11">Height (cm)</label>
      <input
        type="number"
        name="height"
        value={orderDetails.height}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md ${errors.height ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Width (cm)</label>
      <input
        type="number"
        name="width"
        value={orderDetails.width}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md ${errors.width ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.width && <p className="text-red-500 text-sm mt-1">{errors.width}</p>}
    </div> */}

<div className="grid grid-cols-1 md:grid-cols-1 gap-6">
  {/* Initial Measurement */}
  <div>
    <h2 className="text-lg font-semibold text-gray-700 mb-4">Initial Measurement</h2>

    <label className="block text-sm font-medium text-gray-700">Length (cm)</label>
    <input
      type="number"
      name="length"
      value={orderDetails.length}
      onChange={handleChange}
      className={`mt-1 p-2 w-full border rounded-md ${errors.length ? 'border-red-500' : 'border-gray-300'}`}
    />
    {errors.length && <p className="text-red-500 text-sm mt-1">{errors.length}</p>}

    <label className="block text-sm font-medium text-gray-700 mt-4">Height (cm)</label>
    <input
      type="number"
      name="height"
      value={orderDetails.height}
      onChange={handleChange}
      className={`mt-1 p-2 w-full border rounded-md ${errors.height ? 'border-red-500' : 'border-gray-300'}`}
    />
    {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}

    <label className="block text-sm font-medium text-gray-700 mt-4">Width (cm)</label>
    <input
      type="number"
      name="width"
      value={orderDetails.width}
      onChange={handleChange}
      className={`mt-1 p-2 w-full border rounded-md ${errors.width ? 'border-red-500' : 'border-gray-300'}`}
    />
    {errors.width && <p className="text-red-500 text-sm mt-1">{errors.width}</p>}
  </div>

  {/* Final Measurement */}
  
</div>
<div>
    <h2 className="text-lg font-semibold text-gray-700 mb-4">Final Measurement</h2>

    <label className="block text-sm font-medium text-gray-700">Length (cm)</label>
    <input
      type="number"
      name="finalLength"
      value={orderDetails.finalLength}
      onChange={handleChange}
      className={`mt-1 p-2 w-full border rounded-md ${errors.finalLength ? 'border-red-500' : 'border-gray-300'}`}
    />
    {errors.finalLength && <p className="text-red-500 text-sm mt-1">{errors.finalLength}</p>}

    <label className="block text-sm font-medium text-gray-700 mt-4">Height (cm)</label>
    <input
      type="number"
      name="finalHeight"
      value={orderDetails.finalHeight}
      onChange={handleChange}
      className={`mt-1 p-2 w-full border rounded-md ${errors.finalHeight ? 'border-red-500' : 'border-gray-300'}`}
    />
    {errors.finalHeight && <p className="text-red-500 text-sm mt-1">{errors.finalHeight}</p>}

    <label className="block text-sm font-medium text-gray-700 mt-4">Width (cm)</label>
    <input
      type="number"
      name="finalWidth"
      value={orderDetails.finalWidth}
      onChange={handleChange}
      className={`mt-1 p-2 w-full border rounded-md ${errors.finalWidth ? 'border-red-500' : 'border-gray-300'}`}
    />
    {errors.finalWidth && <p className="text-red-500 text-sm mt-1">{errors.finalWidth}</p>}
  </div>

  
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Images</label>
                    <input
                      type="file"
                      multiple
                      onChange={handleImageChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                    {images.length > 0 && (
                      <div className="mt-2">
                        {imagePreviews.map((preview, index) => (
                          <div key={index} className="relative inline-block mr-2">
                            <img src={preview} alt={`Preview ${index}`} className="w-24 h-24 object-cover" />
                            <button
                              onClick={() => handleImageRemove(index)}
                              className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
                            >
                              x
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div> */}
                  <div>
      <label className="block text-sm font-medium text-gray-700">Upload Images (Upto 6 images)</label>
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        className="hidden"
        id="image-upload"
      />
      <div className="flex items-center mt-1">
        <label
          htmlFor="image-upload"
          className="flex items-center justify-center w-24 h-24 bg-gray-200 border border-gray-300 text-gray-500 rounded-md cursor-pointer"
        >
          <span className="text-3xl">+</span>
        </label>
        {images.length > 0 && (
          <div className="flex mt-2 ml-2">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative inline-block mr-2">
                <img src={preview} alt={`Preview ${index}`} className="w-24 h-24 object-cover" />
                <button
                  onClick={() => handleImageRemove(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

    <div className='mb-4'>
        <label className="block text-sm font-medium text-gray-700">Upload PDF</label>
        <input
          type="file"
          accept=".pdf"
          onChange={handlePdfChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
        {pdfPreview && (
          <div className="mt-2 flex items-center">
            <a href={pdfPreview} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              View PDF
            </a>
            <button
              onClick={handlePdfRemove}
              className="ml-4 bg-red-500 text-white p-1 rounded-full text-xs"
            >
              x
            </button>
          </div>
        )}
      </div>

                </>
              )}
              </Box>
              <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: ' 1fr' }, // Ensure proper grid layout
          gap: 2, // Adjust spacing between items
          justifyContent: 'center',
          alignItems:'center',
          pt: 2 
        }}
      >
              {activeStep === 2 && (
//                 <>
//                 <div className='flex gap-4'>
//                     <label className=" w-1/3 text-right mt-3 text-sm font-medium text-gray-700">Order Status:</label>
//                     <select
//                       name="orderStatus"
//                       value={orderDetails.orderStatus}
//                       onChange={handleChange}
//                       className={`mt-1 w-1/3 p-2  border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                     >
//                       <option value="">Select a Status</option>
//                       <option value="Pending">Pending</option>
//                       <option value="Processed">Processed</option>
//                     </select>
//                     {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   </div>
//                 <div className='flex gap-4'>
//                     <label className=" text-sm text-right mt-3 w-1/3  font-medium text-gray-700">Assign To:</label>
//                     <input
//                       type="text"
//                       name="createdBy"
//                       value={orderDetails.createdBy}
//                       onChange={handleChange}
//                       className={`mt-1 p-2 w-1/3 border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//                   </div>
                  
//                   <div className='flex gap-4'>
//                     <label className="text-right mt-3 w-1/3 text-sm font-medium text-gray-700">Start Date</label>
//                     <input
//                       type="date"
//                       name="startdate"
//                       value={orderDetails.startdate}
//                       onChange={handleChange}
//                       className={`mt-1 p-2 w-1/3 border rounded-md ${errors.startdate? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.startdate && <p className="text-red-500 text-sm mt-1">{errors.startdate}</p>}
//                   </div>
//                   <div className='flex gap-4'>
//                     <label className=" text-right mt-3 w-1/3 text-sm font-medium text-gray-700">Expected Completed Date</label>
//                     <input
//                       type="date"
//                       name="enddate"
//                       value={orderDetails.enddate}
//                       onChange={handleChange}
//                       className={`mt-1 p-2 w-1/3 border rounded-md ${errors.enddate? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.enddate && <p className="text-red-500 text-sm mt-1">{errors.enddate}</p>}
//                   </div>
//                   <div className='flex gap-4'>
//                     <label className="text-right mt-3 w-1/3 text-sm font-medium text-gray-700">Comments</label>
//                     <input
//                       type="text"
//                       name="orderStatusComments"
//                       value={orderDetails.orderStatusComments}
//                       onChange={handleChange}
//                       className={`mt-1 p-2 w-1/3 border rounded-md ${errors.orderStatusComments? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.orderStatusComments && <p className="text-red-500 text-sm mt-1">{errors.orderStatusComments}</p>}
//                   </div>
//                   <button                 className=" w-16 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 "
//                   > Add  <span className="text-lg"><IoMdAddCircleOutline /> </span> </button>

// <table className="min-w-full divide-y divide-gray-200">
//         <thead>
//           <tr>
//             <th>Order Status</th>
//             <th>Assign To</th>
//             <th>Start Date</th>
//             <th>Expected Completed Date</th>
//             <th>Comments</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders
//             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((orderDetails, index) => (
//               <tr key={index}>
//                 <td>{orderDetails.orderStatus}</td>
//                 <td>{orderDetails.createdBy}</td>
//                 <td>{orderDetails.startdate}</td>
//                 <td>{orderDetails.enddate}</td>
//                 <td>{orderDetails.orderStatusComments}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>

//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={orders.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
                  
//                 </>
 <>
      <div className='flex gap-32'>
        <label className="w-1/8 text-left ml-44 mt-3 text-sm font-medium text-gray-700">Order Status:</label>
        <select
          name="orderStatus"
          value={orderDetails.orderStatus}
          onChange={handleChange}
          className={`mt-1 w-1/3 p-2 border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select a Status</option>
          <option value="Pending">Pending</option>
          <option value="Processed">Processed</option>
        </select>
        {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
      </div>
      <div className='flex gap-36'>
        <label className="text-sm text-left mt-3 w-1/8 ml-44 font-medium text-gray-700">Assign To:</label>
        <input
          type="text"
          name="createdBy"
          value={orderDetails.createdBy}
          onChange={handleChange}
          className={`mt-1 p-2 w-1/3 border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
      </div>
      <div className='flex gap-36'>
        <label className="text-left mt-3 w-1/8 ml-44 text-sm font-medium text-gray-700">Start Date:</label>
        <input
          type="date"
          name="startdate"
          value={orderDetails.startdate}
          onChange={handleChange}
          className={`mt-1 p-2 w-1/3 border rounded-md ${errors.startdate ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.startdate && <p className="text-red-500 text-sm mt-1">{errors.startdate}</p>}
      </div>
      <div className='flex gap-10'>
        <label className="text-left mt-3 w-1/8 ml-44 text-sm font-medium text-gray-700">Expected Completed Date:</label>
        <input
          type="date"
          name="enddate"
          value={orderDetails.enddate}
          onChange={handleChange}
          className={`mt-1 p-2 w-1/3 border rounded-md ${errors.enddate ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.enddate && <p className="text-red-500 text-sm mt-1">{errors.enddate}</p>}
      </div>
      <div className='flex gap-36'>
        <label className="text-left mt-3 w-1/8 ml-44 text-sm font-medium text-gray-700">Comments:</label>
        <input
          type="text"
          name="orderStatusComments"
          value={orderDetails.orderStatusComments}
          onChange={handleChange}
          className={`mt-1 p-2 w-1/3 border rounded-md ${errors.orderStatusComments ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.orderStatusComments && <p className="text-red-500 text-sm mt-1">{errors.orderStatusComments}</p>}
      </div>
      {/* <button
        onClick={handleAddOrder}
        className="w-16 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
      >
        Add <span className="text-lg"><IoMdAddCircleOutline /></span>
      </button> */}
      <div className="relative">
  <button
    onClick={handleAddOrder1}
    className="absolute bottom-2 right-0 w-16 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
  >
    Add <span className="text-lg"><IoMdAddCircleOutline /></span>
  </button>
</div>

      {orders.length > 0 && (
        <>
          <table className="min-w-full divide-y divide-gray-200 mt-4">
            <thead>
              <tr>
                <th>Order Status</th>
                <th>Assign To</th>
                <th>Start Date</th>
                <th>Expected Completed Date</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {orders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order, index) => (
                  <tr key={index}>
                    <td>{order.orderStatus}</td>
                    <td>{order.createdBy}</td>
                    <td>{order.startdate}</td>
                    <td>{order.enddate}</td>
                    <td>{order.orderStatusComments}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={orders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </>
 
       )}
              </Box>
              <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr ' }, // Ensure proper grid layout
          gap: 2, // Adjust spacing between items
          pt: 2 
        }}
      >
                            {activeStep === 3 && (
    //                           <>
               
    //            <div>
    //   <label className="block text-sm font-medium text-gray-700 mt-1">Total amount</label>
    //   <input
    //     type="number"
    //     name="totalAmount"
    //     value={orderDetails.totalAmount}
    //     onChange={handleChange}
    //     className={`mt-1 p-2 w-full border rounded-md ${errors.totalAmount ? 'border-red-500' : 'border-gray-300'}`}
    //   />
    //   {errors.totalAmount && <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>}
    // </div>
  
    // <div>
    //   <label className="block text-sm font-medium text-gray-700 mt-1">Advance amount</label>
      
    //   <input 
    //     type="number"
    //     name="advanceAmount"
    //     value={orderDetails.advanceAmount}
    //     onChange={handleChange}
    //     className={`mt-1 p-2 w-full border rounded-md ${errors.advanceAmount ? 'border-red-500' : 'border-gray-300'}`}
    //   />
    //   {errors.advanceAmount && <p className="text-red-500 text-sm mt-1">{errors.advanceAmount}</p>}
    // </div>
    // <div>
    //   <label className="block text-sm font-medium text-gray-700 mt-1">installments (In months)</label>
    //   <input
    //     type="number"
    //     name="installments"
    //     value={orderDetails.installments}
    //     onChange={handleChange}
    //     className={`mt-1 p-2 w-full border rounded-md ${errors.installments ? 'border-red-500' : 'border-gray-300'}`}
    //   />
    //   {errors.installments && <p className="text-red-500 text-sm mt-1">{errors.installments}</p>}
    // </div>
    //               <div>
    //   <label className="block text-sm font-medium text-gray-700 mt-1">Balance amount</label>
    //   <input
    //     type="number"
    //     name="balanceAmount"
    //     value={orderDetails.totalAmount-orderDetails.advanceAmount}
    //     onChange={handleChange}
    //     className={`mt-1 p-2 w-full border rounded-md`}
    //   />
    // </div>
    // <div>
    //                 <label className="block text-sm font-medium text-gray-700"> Payments Type</label>
    //                 <select
    //                   name="paymentstype"
    //                   value={orderDetails.paymentstype}
    //                   onChange={handleChange}
    //                   className={`mt-1 p-2 w-full border rounded-md ${errors.paymentstype ? 'border-red-500' : 'border-gray-300'}`}
    //                 >
    //                   <option value="select a type">Select a Type</option>
    //                   <option value="Cash">Cash</option>
    //                   <option value="UPI">UPI</option>
    //                   <option value="Card">Card</option>
    //                 </select>
    //                 {errors.paymentstype && <p className="text-red-500 text-sm mt-1">{errors.paymentstype}</p>}
    //               </div>
    // <div>
    //   <label className="block text-sm font-medium text-gray-700 mt-1">Installment per month</label>
    //   <input
    //     type="number"
    //     name="installmentPerMonth"
    //     value={remainder}
    //     onChange={handleChange}
    //     className={`mt-1 p-2 w-full border rounded-md`}
    //   />
    // </div>
    //               </>
    <>
    <div className='flex '>
      <label className="w-1/4 ml-44 text-left mt-3 text-sm font-medium text-gray-700">Total Amount:</label>
      <input
        type="number"
        name="totalAmount"
       value={orderDetails.totalAmount}
      onChange={handleChange}
 className={`mt-1 w-1/3 p-2 border rounded-md ${errors.totalAmount ? 'border-red-500' : 'border-gray-300'}`}
     />
          {errors.totalAmount && <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>}
    </div>
    <div className='flex '>
      <label className="text-sm text-left mt-3 w-1/4 ml-44 font-medium text-gray-700">Advance Amount:</label>
      <input 
         type="number"
        name="advanceAmount"
        value={orderDetails.advanceAmount}
         onChange={handleChange}
         className={`mt-1 p-2 w-1/3 border rounded-md ${errors.advanceAmount ? 'border-red-500' : 'border-gray-300'}`}
       />
      {errors.advanceAmount && <p className="text-red-500 text-sm mt-1">{errors.advanceAmount}</p>}
     
    </div>
    <div className='flex'>
      <label className=" text-left mt-3 w-1/4 ml-44 text-sm font-medium text-gray-700">Installments (In months):</label>
      <input
         type="number"
         name="installments"
         value={orderDetails.installments}
         onChange={handleChange}
         className={`mt-1 p-2 w-1/3 border rounded-md  ${errors.installments ? 'border-red-500' : 'border-gray-300'}`}
      />
       {errors.installments && <p className="text-red-500 text-sm mt-1">{errors.installments}</p>}
     
    </div>
    <div className='flex '>
      <label className="text-left  ml-44 w-1/4 mt-3  text-sm font-medium text-gray-700">Balance Amount:</label>
      <input
        type="number"
         name="balanceAmount"
         value={orderDetails.totalAmount-orderDetails.advanceAmount}
         onChange={handleChange}
         className={`mt-1 p-2 w-1/3 border rounded-md`}
      />
     
    </div>
    <div className='flex '>
      <label className="text-left  ml-44 w-1/4 mt-3  text-sm font-medium text-gray-700">Installment to pay per month:</label>
        <input
         type="number"
         name="installmentPerMonth"
         value={remainder}
         onChange={handleChange}
        className={`mt-1 p-2 w-1/3 border rounded-md`}
      />
    </div>
    <div className='flex '>
      <label className="text-left  ml-44 w-1/4 mt-3  text-sm font-medium text-gray-700">Paymenys Type:</label>
      <select
                      name="paymentstype"
                   value={orderDetails.paymentstype}
                       onChange={handleChange}
                      className={`mt-1 p-2 w-1/3 border rounded-md ${errors.paymentstype ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="select a type">Select a Type</option>
                    <option value="Cash">Cash</option>
                     <option value="UPI">UPI</option>
                     <option value="Card">Card</option>
                    </select>
                    {errors.paymentstype && <p className="text-red-500 text-sm mt-1">{errors.paymentstype}</p>}
        
    </div>
    
    <div className="relative">
  <button
    onClick={handleAddOrder1}
    className="absolute bottom-3 right-0 w-16 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
  >
    Add <span className="text-lg"><IoMdAddCircleOutline /></span>
  </button>
</div>

    {orders.length > 0 && (
      <>
        <table className="min-w-full divide-y divide-gray-200 mt-4">
          <thead>
            <tr>
              <th>TotalAmount</th>
              <th>AdvanceAmount</th>
              <th> BalanceAmount</th>
              <th>Installments months</th>
             
              <th>Installment Per Month Pay</th>
              <th>Payment Type</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order, index) => (
                <tr key={index}>
                  <td>{order.totalAmount}</td>
                  <td>{order.advanceAmount}</td>
                  <td>{order.totalAmount-order.advanceAmount}</td>
                  <td>{order.installments}</td>

                  <td>{(order.totalAmount-order.advanceAmount)/order.installments}</td>
                  <td>{order.paymentstype}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    )}
  </>
)}

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <button
                color="inherit"
                onClick={handleBack}
                                        className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 "
                disabled={activeStep === 0}
              >
                          <MdArrowBackIosNew />
                          Back
              </button>
              <Box sx={{ flex: '1 1 auto' }} />
              <button
                variant="contained"
                onClick={handleCancel}
                className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 ml-2 mr-4"                ><MdDelete/>
                Cancel
              </button>              <button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 "
                >

                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                <MdOutlineArrowForwardIos />

              </button>
            </Box>
          </React.Fragment>
        )}
        {showAlert && (
          <div className="fixed top-0 right-0 w-full bg-green-500 text-white p-4 text-center">
            <span>Order added successfully!</span>
          </div>
        )}
        {submittedDetails && (
          <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4">Submitted Order Details:</h3>
            <p><strong>Name:</strong> {submittedDetails.name}</p>
            <p><strong>Email:</strong> {submittedDetails.email}</p>
            <p><strong>Phone:</strong> {submittedDetails.phone}</p>
            <p><strong>Address:</strong> {submittedDetails.address}</p>
            <p><strong>City:</strong> {submittedDetails.city}</p>
            <p><strong>State:</strong> {submittedDetails.state}</p>
            <p><strong>Zipcode:</strong> {submittedDetails.zipcode}</p>
            <p><strong>Order Status:</strong> {submittedDetails.orderStatus}</p>
            <p><strong>Created By:</strong> {submittedDetails.createdBy}</p>
            <p><strong>Expected Delivery Date:</strong> {submittedDetails.deliveryDate}</p>
            <p><strong>Design:</strong> {submittedDetails.design}</p>
            <p><strong>Type:</strong> {submittedDetails.type}</p>
            <p><strong>Source:</strong> {submittedDetails.categories}</p>
            <p><strong>Sub-Source:</strong> {submittedDetails.subOption}</p>
            <p><strong>TotalAmount:</strong> {submittedDetails.totalAmount}</p>
            <p><strong>AdvanceAmount:</strong> {submittedDetails.advanceAmount}</p>
            <p><strong>Comments:</strong> {submittedDetails.comments}</p>
            <p><strong>OrderStatusCommentsComments:</strong> {submittedDetails.orderStatusComments}</p>
            <p><strong>StartDate:</strong> {submittedDetails.startdate}</p>
            <p><strong>Expected Completed Date:</strong> {submittedDetails.enddate}</p>
            <p><strong>Payments Type</strong> {submittedDetails.paymentstype}</p>
            <p><strong>BalanceAmount:</strong> {submittedDetails.totalAmount-submittedDetails.advanceAmount}</p>
            <p><strong>Initial Measurement:Length</strong> {submittedDetails.length}</p>
            <p><strong>Initial Measurement:Height</strong> {submittedDetails.height}</p>
            <p><strong>Initial Measurement:Width</strong> {submittedDetails.width}</p>
            <p><strong>Final Measurement:Length</strong> {submittedDetails.finalLength}</p>
            <p><strong>Final Measurement:Height</strong> {submittedDetails.finalHeight}</p>
            <p><strong>Final Measurement:Width</strong> {submittedDetails.finalWidth}</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {submittedDetails.images && submittedDetails.images.map((img, index) => (
                <img key={index} src={img} alt={`Final ${index}`} className="w-full h-36 object-cover border rounded-md" />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {submittedDetails.pdfPreview && submittedDetails.pdfPreview.map((img, index) => (
                <img key={index} src={img} alt={`Final ${index}`} className="w-full h-36 object-cover border rounded-md" />
              ))}
            </div>
          </div>
        )}
      </Box>
    </div>
    </>
  );
}

export default AddOrders;
