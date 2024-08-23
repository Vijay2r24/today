// import React, { useEffect, useRef } from 'react';
// import { Chart, registerables } from 'chart.js';
// import { Line, Bar } from 'react-chartjs-2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine, faUsers, faDollarSign, faTasks } from '@fortawesome/free-solid-svg-icons';
// import 'chart.js/auto';

// // Register the required components globally
// Chart.register(...registerables);

// const Dashboard = () => {
//   const lineChartRef = useRef(null);
//   const barChartRef = useRef(null);

//   const lineData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         label: 'Sales Per Month',
//         data: [65, 59, 80, 81, 56, 55],
//         fill: false,
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   };

//   const barData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         label: 'Revenue Generated Per Month',
//         data: [65, 59, 80, 81, 56, 55],
//         backgroundColor: 'rgba(153, 102, 255, 0.6)',
//         borderColor: 'rgba(153, 102, 255, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   useEffect(() => {
//     const lineChartInstance = lineChartRef.current;
//     const barChartInstance = barChartRef.current;

//     return () => {
//       if (lineChartInstance) {
//         lineChartInstance.destroy();
//       }
//       if (barChartInstance) {
//         barChartInstance.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div className="container p-4 ml-10 lg:ml-72 w-auto ">
//       {/* Dashboard Header */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         <div className="bg-blue-500 text-white shadow rounded-lg p-4 relative">
//           <div className="flex flex-col justify-between h-full">
//             <div>
//               <h3 className="text-lg font-semibold">Orders</h3>
//               <p className="text-2xl">100</p>
//             </div>
//             <FontAwesomeIcon icon={faChartLine} className="text-4xl absolute bottom-4 right-4" />
//           </div>
//         </div>
//         <div className="bg-green-500 text-white shadow rounded-lg p-4 relative">
//           <div className="flex flex-col justify-between h-full">
//             <div>
//               <h3 className="text-lg font-semibold">Users Registered</h3>
//               <p className="text-2xl">200</p>
//             </div>
//             <FontAwesomeIcon icon={faUsers} className="text-4xl absolute bottom-4 right-4" />
//           </div>
//         </div>
//         <div className="bg-red-500 text-white shadow rounded-lg p-4 relative">
//           <div className="flex flex-col justify-between h-full">
//             <div>
//               <h3 className="text-lg font-semibold">Revenue Generated</h3>
//               <p className="text-2xl">300</p>
//             </div>
//             <FontAwesomeIcon icon={faDollarSign} className="text-4xl absolute bottom-4 right-4" />
//           </div>
//         </div>
//         <div className="bg-yellow-500 text-white shadow rounded-lg p-4 relative">
//           <div className="flex flex-col justify-between h-full">
//             <div>
//               <h3 className="text-lg font-semibold">Products Added</h3>
//               <p className="text-2xl">400</p>
//             </div>
//             <FontAwesomeIcon icon={faTasks} className="text-4xl absolute bottom-4 right-4" />
//           </div>
//         </div>
//       </div>

//       {/* Graph Section */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-white shadow rounded-lg p-4">
//           <h2 className="text-xl font-semibold mb-4">Sales</h2>
//           <Line data={lineData} ref={lineChartRef} />
//         </div>
//         <div className="bg-white shadow rounded-lg p-4">
//           <h2 className="text-xl font-semibold mb-4">Revenue</h2>
//           <Bar data={barData} ref={barChartRef} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faIndianRupeeSign, faTasks } from '@fortawesome/free-solid-svg-icons';
import 'chart.js/auto';

// Register the required components globally
Chart.register(...registerables);

const Dashboard = () => {
    const lineChartRef = useRef(null);
    const barChartRef = useRef(null);

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales Per Month',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Revenue Generated Per Month',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    useEffect(() => {
        const lineChartInstance = lineChartRef.current;
        const barChartInstance = barChartRef.current;

        return () => {
            if (lineChartInstance) {
                lineChartInstance.destroy();
            }
            if (barChartInstance) {
                barChartInstance.destroy();
            }
        };
    }, []);

    return (
        <div className="p-4 ml-10 lg:ml-72 sm:p-6 bg-gray-100 ">
            {/* Dashboard Header */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ">
                <div className="bg-blue-500 text-white shadow rounded-lg p-4 relative">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-lg font-semibold">Orders</h3>
                            <p className="text-2xl">1346</p>
                        </div>
                        <FontAwesomeIcon icon={faChartLine} className="text-4xl absolute bottom-4 right-4" />
                    </div>
                </div>
                <div className="bg-green-500 text-white shadow rounded-lg p-4 relative">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-lg font-semibold">Users Registered</h3>
                            <p className="text-2xl">357</p>
                        </div>
                        <FontAwesomeIcon icon={faUsers} className="text-4xl absolute bottom-4 right-4" />
                    </div>
                </div>
                <div className="bg-red-500 text-white shadow rounded-lg p-4 relative">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-lg font-semibold">Revenue Generated</h3>
                            <p className="text-2xl">36056</p>
                        </div>
                        <FontAwesomeIcon icon={faIndianRupeeSign} className="text-4xl absolute bottom-4 right-4" />
                    </div>
                </div>
                <div className="bg-yellow-500 text-white shadow rounded-lg p-4 relative">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-lg font-semibold">Products Added</h3>
                            <p className="text-2xl">865</p>
                        </div>
                        <FontAwesomeIcon icon={faTasks} className="text-4xl absolute bottom-4 right-4" />
                    </div>
                </div>
            </div>

            {/* Graph Section */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white shadow rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">Sales</h2>
                        <Line data={lineData} ref={lineChartRef} />
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">Revenue</h2>
                        <Bar data={barData} ref={barChartRef} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
