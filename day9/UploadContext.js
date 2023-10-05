import React, { createContext, useContext, useState } from 'react';

// Create the context
const UploadContext = createContext();

// Create a custom hook to access the context
export const useUploadContext = () => {
  return useContext(UploadContext);
};

// Create a provider component to wrap your app
export const UploadProvider = ({ children }) => {
  const [uploadedWorks, setUploadedWorks] = useState([]);

  const addUploadedWork = (work) => {
    setUploadedWorks([...uploadedWorks, work]);
  };

  return (
    <UploadContext.Provider value={{ uploadedWorks, addUploadedWork }}>
      {children}
    </UploadContext.Provider>
  );
};
