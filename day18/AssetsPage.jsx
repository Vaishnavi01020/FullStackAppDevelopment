import React from 'react';
import { useUploadContext } from './UploadContext';
import '../assets/css/AssetsPage.css';
import Header from './Header';
import Footer from './Footer';
const AssetsPage = () => {
  const { uploadedWorks } = useUploadContext();

  return (
    <div className='productCardContainer'>
      <Header/>
      {uploadedWorks.map((work, index) => (
        <div className='productCard' key={index}>
          <div className='productImage'>
            <img src={work.imageUrl} alt={work.title} />
          </div>
          <div className='textPart'>
            <div>
              <p className='productTitle'>{work.title}</p>
              <p className='productDescription'>{work.description}</p>
            </div>
          </div>
        </div>
      ))}
      <Footer/>
    </div>
  );
};

export default AssetsPage;