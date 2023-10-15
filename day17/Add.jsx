import React, { useState } from 'react';
import { CreateProject } from '../Api';
import AdminHeader from './Dashboard/AdminHeader';
import Footer from './Footer';
const ValueForm = () => {
  const [formData, setFormData] = useState({
   
    name: '',
    projectname: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      const res=await CreateProject(formData);
      console.log(res.data);
      setFormData(res.data);
      navigate(-1);
      }
      catch{
        
      }
  };

  return (
    <div>
      <AdminHeader/>
      <h2>Enter Values</h2>
      <form onSubmit={handleFormSubmit}>
      

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="projectname">Project Name:</label>
        <input
          type="text"
          id="projectname"
          name="projectname"
          value={formData.projectname}
          onChange={handleInputChange}
        /><br /><br />

        <button className="btn btn-success" type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
  );
};

export default ValueForm;
