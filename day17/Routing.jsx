import React ,{useState} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Header from './Header';
import ValueForm from './Add';
import AdminHeader from './Dashboard/AdminHeader';
import BarChart from './Dashboard/dashmain';
import { useUser } from './context/UserContext';
import Project from './pages/Project';
import ProjectCreate from './pages/ProjectCreate';
import ProjectView from './pages/ProjectView';
import ProjectEnvironment from './pages/ProjectEnvironment';
import DrawingCanvas from './Drawing';
import MusicComposing from './MusicComposing';
import WritingPad from './WrittingPad';
import Aboutus from './Aboutus'; // Import the About Us component
import FaqPopup from './FaqPopup';
import { UploadProvider, useUploadContext } from './UploadContext';

import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import AssetsPage from './AssetsPage';
import YourWorks from './YourWorks';
import UploadPage from './UploadPage'
import FollowersPage from './FollowersPage';
import Home from './Home';
import Footer from './Footer';
import ListArtComponent from './ListArtComponent';
import AddArtComponent from './AddArtComponent';
import '../components/Dashboard/App.css'
import AdminDashboard from './Dashboard/AdminDashboard';
import LoginAndSignUp from './LoginAndSignUp';
//import AdminDashboard from './Dashboard/AdminDashboard';
//import { useUser } from './components/UserContext';
//import UserData from './UserData';
import AdminSideBar from './Dashboard/AdminSideBar';
import UserData from './UserData';
const PrivateRoute=({children})=>{
    const {isUserLoggedin}=useUser();
    return isUserLoggedin ? children : <Navigate to="/" replace/>;
  }
  // const PrivateRoute = ({ children }) => {
  //   const { isUserLoggedin, role } = useUser(); // Get the user's role from the context
  //   return isUserLoggedin ? children : <Navigate to="/" replace />;
  // };
  const AppRoutes = () => {
  
 
  return (
    <div className="app-container">
       <UploadProvider>
       <Routes>
          <Route exact path="/" element={<LoginAndSignUp />} />
          <Route exact path="/login-signup" element={<LoginAndSignUp />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/UserData" element={<UserData/>}/>
          <Route path="/AdminSidebar" element={<AdminSideBar/>}/>
          <Route path="/BarChart" element={<BarChart />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectC" element={<ProjectCreate />} />
          <Route path="/projectV" element={<ProjectView />} />
          <Route path="/environment/:projectId" element={<ProjectEnvironment />} />
          <Route path="/Drawing" element={<DrawingCanvas />} />
          <Route path="/Music" element={<MusicComposing />} />
          <Route path="/write" element={<WritingPad />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/faq" element={<FaqPopup />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          <Route path="/your-works" element={<YourWorks />} />
          <Route path="/Homepage" element={<Home />} />
          <Route path="/uploadpage" element={<UploadPage />} />
          <Route path="/assets" element={<AssetsPage />} />
          <Route path="/followers" element={<FollowersPage />} />
           <Route path="/ListArtComponent" element={<ListArtComponent/>}/>  
           <Route path="/AddArtComponent" element={<AddArtComponent/>}/> 
           <Route path="/ValueForm" element={<ValueForm/>}></Route> 
      {/*
      <Route path="/EditOrDelete" element={<EditOrDelete/>}/>
      <Route path="/ListArtComponent" element={<ListArtComponent/>}/>
      <Route path="/edit/:book_id" element={<UpdateArtComponent/>}/> */}

          <Route path="/footer" element={<Footer />} />
        </Routes>
            </UploadProvider>
            
      </div>
  );
};

export default AppRoutes;
