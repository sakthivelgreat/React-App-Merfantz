import DocumentTypeTemplete from './DocumentTypeTemplete';
import Navbar from './Navbar';
import ProfileDetails from './profileDetails';
import { Tooltip } from 'react-tooltip'
import SideNavBar from './SideNavBar';
import { useState } from 'react';
import './App.css';
import Debitsettlement from './Cards/CardsClickTempletes/Debitsettlement';


function App() {
  const [showContent, setShowContent] = useState(false);
  const [myTooltip, setMyTooltip] = useState('tooltip-id'); 

  const [documentTyp, setDocumentTyp] = useState('Documenttypes');

  const handleDropdownToggleNav = () => {
    setShowContent(!showContent);
  };
  const handleClickDocumentTypes = (ComponentName)=> {
    setDocumentTyp(ComponentName);
  };



  return (
    <div className='Fullpage'>
      <div >
        <Navbar handleDropdownToggleNav={handleDropdownToggleNav} myTooltip={myTooltip} />
      </div>
      <div className='SideNavbar' style={{ display:'grid',gridTemplateColumns:'auto 1fr'}}>
        <div className="sidebar">
          <SideNavBar OnClick={handleClickDocumentTypes} />
        </div>
        <div  className='Main'>
          {showContent && (
            <div >
              <ProfileDetails />
            </div>
          )}
          <div  onChange={<div><DocumentTypeTemplete/>  <Tooltip  id={myTooltip} style={{ borderRadius:'8px' }}/></div>} >
          {documentTyp =='Documenttypes' && (<div><DocumentTypeTemplete/>  <Tooltip  id={myTooltip} style={{ borderRadius:'8px' }}/></div>)}
          {documentTyp =='AllDocuments'&&( <div><Debitsettlement/></div> )}
          {documentTyp =='AllModels'&&( <h1>h@</h1>)}
          {documentTyp =='GetStarted'&&( <h1>h3</h1>)}
          {documentTyp =='AIModelsHub'&&( <h1>h4</h1>)}
          {documentTyp =='Settings'&&( <h1>h5</h1>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
