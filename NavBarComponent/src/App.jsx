import './App.css'
import DocumentTypeTemplete from './DocumentTypeTemplete'
import Navbar from './Navbar'
import ProfileDetails from './profileDetails'
import SideNavBar from './SideNavBar'
import { useState } from 'react'

function App() {
  
  const [showContent, setShowContent] = useState(false);

 
  const handleDropdownToggleNav = () => {
    if (showContent === true) {
      setShowContent(false); 
    } else {
      setShowContent(true);   
    }
    
  };

  return (
    <>
     <SideNavBar/>
     <DocumentTypeTemplete/>
    <Navbar handleDropdownToggleNav = { handleDropdownToggleNav }/>
    {showContent && <div><ProfileDetails/> </div>}   
    </>
  )
}

export default App
