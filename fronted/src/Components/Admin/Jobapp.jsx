import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminForm = () => {
  const [form, setForm] = useState({
    jobTitle: '',
    jobLocation: '',
    companyName: '',
    workMode: '',
    jobType: '',
    pay: Number,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/employment/data_insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
  
      const result = await response.json();
      console.log(result);
  
      // Show success toast notification
      toast.success("Data submitted successfully");
  
      // Clear form data after successful submission
      setForm({
        jobTitle: '',
        jobLocation: '',
        companyName: '',
        workMode: '',
        jobType: '',
        pay: 0,
      });
  
      // Optional: Set success state if needed
      setSuccess(true);
    } catch (error) {
      setError(error.message);
      // Optional: Set success state to false if needed
      setSuccess(false);
  
      // Show error toast notification
      toast.error("Failed to submit data");
    }
  };
  

  return (
    <div className="admin-form-container">
      <h1 className='text-3xl font-bold'>Create a New JOB</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="input-group">
          <label>Job Title</label>
          <input type="text" name="jobTitle" placeholder='Enter Job Title' value={form.jobTitle} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Job Location</label>
          <select name="jobLocation" value={form.jobLocation} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="jaipur">Jaipur</option>
            <option value="lucknow">Lucknow</option>
            <option value="alwar">Alwar</option>
            <option value="agra">Agra</option>
            <option value="mathura">Mathura</option>
            <option value="delhi">Delhi</option>
            <option value="jodhpur">Jodhpur</option>
          </select>
        </div>
        <div className="input-group">
          <label>Company Name</label>
          <input type="text" name="companyName" placeholder='Enter Company Name' value={form.companyName} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Work Mode</label>
          <select name="workMode" value={form.workMode} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div className="input-group">
          <label>Type</label>
          <select name="jobType" value={form.jobType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
        </div>
        <div className="input-group">
          <label>Pay</label>
          <input type="number" name="pay" placeholder='Enter Salary' value={form.pay} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default AdminForm;
