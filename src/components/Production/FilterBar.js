// import React from 'react';
// import { FaList, FaTruck,FaClock, FaBan } from 'react-icons/fa';

// const FilterBar = ({ selectedFilter, onFilterChange }) => {
//   return (
//     <div className="flex space-x-4 p-4 bg-gray-100 rounded-md">
//       <button
//         className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
//           selectedFilter === 'All'
//             ? 'bg-red-500 text-white'
//             : 'bg-white text-gray-700'
//         }`}
//         onClick={() => onFilterChange('All')}
//       >
//         <FaList/>
//         All
//       </button>
//       <button
//         className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
//           selectedFilter === 'Delivered'
//             ? 'bg-red-500 text-white'
//             : 'bg-white text-gray-700'
//         }`}
//         onClick={() => onFilterChange('Delivered')}
//       >
//         <FaTruck/>
//         Delivered
//       </button>
//       <button
//         className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
//           selectedFilter === 'Pending'
//             ? 'bg-red-500 text-white'
//             : 'bg-white text-gray-700'
//         }`}
//         onClick={() => onFilterChange('Pending')}
//       >
//         <FaClock/>
//         Pending
//       </button>
//       <button
//         className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
//           selectedFilter === 'Canceled'
//             ? 'bg-red-500 text-white'
//             : 'bg-white text-gray-700'
//         }`}
//         onClick={() => onFilterChange('Canceled')}
//       >
//         <FaBan/>
//         Canceled
//       </button>
//     </div>
//   );
// };

// export default FilterBar;


import React from 'react';
import { FaList, FaTruck,FaTasks, FaBan,FaSpinner, FaCalendar, FaRetweet, FaWrench } from 'react-icons/fa';
const FilterBar = ({ selectedFilter, onFilterChange }) => {
  return (
    <div className="flex space-x-4 p-4 bg-gray-100 rounded-md">
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'All'
            ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
            : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
        }`}
        onClick={() => onFilterChange('All')}
      >
        <FaList/>
        All
      </button>
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'Dispatched'
       ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
            : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
        }`}
        onClick={() => onFilterChange('Dispatched')}
      >
        <FaTruck/>
        Dispatched
      </button>
      <button
  className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
    selectedFilter === 'Workstarted'
      ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
      : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
  }`}
  onClick={() => onFilterChange('Workstarted')}
>
  <FaTasks /> {/* Use the new icon */}
  Workstarted
</button>
<button
      className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
        selectedFilter === 'InProgress'
          ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
          : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
      }`}
      onClick={() => onFilterChange('InProgress')}
    >
      <FaSpinner className="animate-spin" /> {/* Icon for In Progress with spin animation */}
      In Progress
    </button>

    <button
      className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
        selectedFilter === 'DispatchDate'
          ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
          : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
      }`}
      onClick={() => onFilterChange('DispatchDate')}
    >
      <FaCalendar /> {/* Icon for Dispatch Date */}
      Dispatch Date
    </button>

    <button
      className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
        selectedFilter === 'Replacement'
          ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
          : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
      }`}
      onClick={() => onFilterChange('Replacement')}
    >
      <FaRetweet /> {/* Icon for Replacement */}
      Replacement
    </button>

    <button
      className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
        selectedFilter === 'Repair'
          ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
          : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
      }`}
      onClick={() => onFilterChange('Repair')}
    >
      <FaWrench /> {/* Icon for Repair */}
      Repair
    </button>
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'Canceled'
        ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
            : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
        }`}
        onClick={() => onFilterChange('Canceled')}
      >
        <FaBan/>
        Cancelled
      </button>
    </div>
  );
};

export default FilterBar;
