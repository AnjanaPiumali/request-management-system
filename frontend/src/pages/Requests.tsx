import React, { useState } from 'react';
import CreateRequestForm from '../pages/CreateRequestForm'; // Ensure this is correctly imported
import Modal from '../components/Modal'; // Import the new Modal component
import './Requests.css';  // Ensure proper styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faFilter, faDownload, faEye, } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Requests: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(event.target.value);
  };

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartmentFilter(event.target.value);
  };

  const handleNewRequestClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  

  return (
    <div className="requests-page">
      {/* Header and New Request Button */}
      <div className="requests-header">
        <h1>Requests</h1>
        <button onClick={handleNewRequestClick} className="new-request-btn">
          <FontAwesomeIcon icon={faPlus} /> New Request
        </button>
      </div>

      {/* Status Circles (aligned to the right) */}
      <div className="status-circles-container">
        <div className="circle new-requests">
          <span className="count">10</span>
          <span className="label">New Requests</span>
        </div>
        <div className="circle delayed-requests">
          <span className="count">05</span>
          <span className="label">Delayed Requests</span>
        </div>
        <div className="circle escalated-requests">
          <span className="count">02</span>
          <span className="label">Escalated Requests</span>
        </div>
        <div className="circle on-hold-requests">
          <span className="count">00</span>
          <span className="label">On Hold Requests</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by"
          value={searchTerm}
          onChange={handleSearch}
        />
        <input type="date"
            placeholder="Feb 1, 2024 - Feb 10,2024"
        />

        <select onChange={handleStatusChange}>
          <option value="">Status</option>
          <option value="NEW">New</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
        <select onChange={handleDepartmentChange}>
          <option value="">Department</option>
          <option value="Patient Experience">Patient Experience</option>
          <option value="IT">IT</option>
        </select>

        <div className="button__right"></div>
        <button className="filter-button">
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <button className="download-button">
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>

      {/* Requests Table */}
      <table className="requests-table">
        <thead>
          <tr>
            <th>SL No</th>
            <th>Request ID</th>
            <th>Created on</th>
            <th>Location</th>
            <th>Service</th>
            <th>Status</th>
            <th>Department</th>
            <th>Requested By</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Sample row */}
          <tr>
            <td>1</td>
            <td>SKMCAA0026</td>
            <td>14/01/20</td>
            <td>F103-Bed</td>
            <td>Call me</td>
            <td><span className="badge new">NEW</span></td>
            <td>Patient Experience</td>
            <td>Hassan Ali</td>
            <td>Mohamed</td>
            <td><span className="badge high">HIGH</span></td>
            <td><FontAwesomeIcon icon={faEye} /></td>
          </tr>
          <tr>
            <td>1</td>
            <td>SKMCAA0026</td>
            <td>14/01/20</td>
            <td>F103-Bed</td>
            <td>Call me</td>
            <td><span className="badge new">In Progress</span></td>
            <td>Patient Experience</td>
            <td>Hassan Ali</td>
            <td>Mohamed</td>
            <td><span className="badge high">HIGH</span></td>
            <td><FontAwesomeIcon icon={faEye} /></td>
          </tr>
        </tbody>
      </table>
      <br/><br/>

     {/* Render the modal with the CreateRequestForm when the button is clicked */}
     <Modal isVisible={isModalVisible} onClose={closeModal}>
        <CreateRequestForm />
      </Modal>


      {/* Pagination */}
      <Stack spacing={2}>
      <Pagination count={5} color="secondary"  shape="rounded" />
    </Stack>
    </div>
  );
};

export default Requests;