// UploadPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUploadContext } from './UploadContext';
import Header from './Header';
import Footer from './Footer';
function UploadPage() {
  const { uploadedWorks, addUploadedWork } = useUploadContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a delay for file upload (replace with actual upload logic)
    setTimeout(() => {
      const newWork = {
        id: uploadedWorks.length + 1,
        title: title,
        description: description,
        imageUrl: URL.createObjectURL(file),
      };

      addUploadedWork(newWork);

      setTitle('');
      setDescription('');
      setFile(null);

      // Navigate to the AssetsPage with uploaded data in the state
      navigate('/assets', { state: { uploadedWorks: [...uploadedWorks, newWork] } });
    }, 1000);
  };

  return (
    <div>
      <Header/>
      <div className="upload-page">
        <h1>Upload Your Artwork</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Choose File</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default UploadPage;
