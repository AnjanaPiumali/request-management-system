import React, { useState } from 'react';
import './CreateRequestForm.css'; // Import your CSS file

const CreateRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    floor: '',
    room: '',
    block: '',
    guestName: '',
    phoneNumber: '',
    service: '',
    department: '',
    priority: '',
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <h2>Create New Request</h2>

      <label>
        Floor: <span style={{ color: 'red' }}>*</span><br />
        <select
          name="floor"
          value={formData.floor}
          onChange={handleChange}
          required
        >
          <option value="">Select Floor</option>
          <option value="1">1st Floor</option>
          <option value="2">2nd Floor</option>
        </select>
      </label><br />

      <label>
        Room / Unit: <span style={{ color: 'red' }}>*</span><br />
        <input
          type="text"
          name="room"
          value={formData.room}
          onChange={handleChange}
          required
        />
      </label><br />

      <label>
        Block: <span style={{ color: 'red' }}>*</span><br />
        <select
          name="block"
          value={formData.block}
          onChange={handleChange}
          required
        >
          <option value="">Select Block</option>
          <option value="A">Block A</option>
          <option value="B">Block B</option>
        </select>
      </label><br />

      <label>
        Guest Name:<br />
        <input
          type="text"
          name="guestName"
          value={formData.guestName}
          onChange={handleChange}
        />
      </label><br />

      <label>
        Phone Number:<br />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label><br />

      <label>
        Service:<br />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          <option value="cleaning">Cleaning</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </label><br />

      <label>
        Department:<br />
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="housekeeping">Housekeeping</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </label><br />

      <label>
        Priority:<br />
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label><br />

      <label>
        Upload File:<br />
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
        />
      </label><br />

      <div className="form-buttons">
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" className="cancel-btn" onClick={() => console.log("Form closed")}>Cancel</button>
      </div>
    </form>
  );
};

export default CreateRequestForm;
