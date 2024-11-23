import DocumentTypeTemplete from './DocumentTypeTemplete';
import Navbar from './Navbar';
import ProfileDetails from './profileDetails';
import SideNavBar from './SideNavBar';
import { useState } from 'react';
import './App.css';


function App() {
  const [showContent, setShowContent] = useState(false);

  const handleDropdownToggleNav = () => {
    setShowContent(!showContent);
  };

  return (
    <div className='Fullpage'>
        <div >
          <Navbar handleDropdownToggleNav={handleDropdownToggleNav} />
        </div>
      
      <div className='SideNavbar' style={{ display:'grid',gridTemplateColumns:'auto 1fr'}}>
        <div className="sidebar">
          <SideNavBar />
        </div>
        <div  className='Main'>
          {showContent && (
            <div >
              <ProfileDetails />
            </div>
          )}
          <DocumentTypeTemplete />
        </div>
      </div>
    </div>
  );
}

export default App;
