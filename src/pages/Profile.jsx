

import  { useState } from 'react';
import axios from 'axios';
import './Profile.css'; 
import { Link } from "react-router-dom";
const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    degree: '',
    educationStatus: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/profile', formData);
      console.log(response.data);
      setSubmittedData(response.data);
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };

  return (
    <div>

<div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>

    <div className="bg-white p-3 rounded" style ={{width:'40%'}}> 
      <h3 className="profile-heading">Built Profile</h3>
      <form onSubmit={handleSubmit} className="profile-form"> 
        <div className="mb-2 text-start">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="mb-2 text-start">
          <label className="form-label">Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="mb-2 text-start">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="mb-2 text-start">
          <label className="form-label">Highest Degree:</label>
          <select
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select</option>
            <option value="Higher Secondary Education">Higher Secondary Education</option>
            <option value="B.Ed">B.Ed</option>
            <option value="B.tech">B.tech</option>
            <option value="Bsc">Bsc</option>
            <option value="Msc">Msc</option>
            <option value="MCA">MCA</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Education Status:</label>
          <select
            name="educationStatus"
            value={formData.educationStatus}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            
          </select>
        </div>
        
        <Link to='/api/profile' className="submit-button">Submit</Link>

      </form>
      {submittedData && ( 
            <div className="submitted-data">
              <h4>Submitted Profile Details:</h4>
              <p>First Name: {submittedData.firstName}</p>
              <p>Middle Name: {submittedData.middleName}</p>
              <p>Last Name: {submittedData.lastName}</p>
              <p>Highest Degree: {submittedData.degree}</p>
              <p>Education Status: {submittedData.educationStatus}</p>
            </div>
          )}  
    </div>
    </div>
    </div>
  );
};

export default Profile;
