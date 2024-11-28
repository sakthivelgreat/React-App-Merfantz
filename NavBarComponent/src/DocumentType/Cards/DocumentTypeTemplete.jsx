import React from 'react'
import './documentTypeTemplete.css';
import DecumentTypesCards from '../Cards/DecumentTypesCards';
import StatmentCard from '../Cards/StatmentCard';
import RentRoll from '../Cards/RentRoll';


export const DocumentTypeTemplete = () => {
  return (
    <div>
      <div style={{ display:'flex', flexDirection:'column',alignContent:'center',justifyContent:'center'  }}>
        <div className='main-Decument'>
          <div className='main-navbar' >
            <div style={{ padding:'5px 20px'}}>
              <h1 style={{ padding: '0px 20px' ,color: 'black', fontFamily: 'system-ui' }}>Document type</h1>
            </div>
            <div style={{ display:'flex', justifyContent : 'center',alignItems : 'center' , gap:'20px'}}>
              <div className='nav-search' style={{ display :'flex', justifyContent:'center',alignItems :'center'}}>
                <svg width="1.25em" height="1.25em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="BwBqp"><path d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <input className='input-search' style={{ padding : ' 2px', border:'none',outline: 'none' , fontSize: '14px',backgroundColor:'' }}  placeholder="Search document type" title="Search (Ctrl + F)" data-hj-allow="true" value=""></input>
              </div>
              <span style={{borderRight:'1px solid #D0D2D6' , height:'40px',width:'10px'}}></span>
              <button type='button' style={{ border:'none', height:'100%', display:'flex',justifyContent:'center',alignItems:'center', borderRadius:'5px', color:'white', backgroundColor:'#4D61FC' }}>
                <span>
                <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6 12h6m6 0h-6m0 0V6m0 6v6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
                <span>Add Document Type</span>
              </button>
            </div>       
          </div>
          <div className='cards' style={{display:'flex',flexWrap:"wrap", gap:'20px'}}>
            <DecumentTypesCards Heading={"Debit settlement"} Uploaded={"1"} Review={"0"} Approved={"1"} />
            <RentRoll Heading={"Debit settlement"} Uploaded={"1"} Review={"0"} Approved={"1"}/>
            <DecumentTypesCards Heading={"Rent Roll"} Uploaded={"1"} Review={"0"} Approved={"1"}/>
            <DecumentTypesCards Heading={"Document 0"} Uploaded={"0"} Review={"0"} Approved={"0"}/>
            <StatmentCard Heading={"Bank Statements 0"} Uploaded={"0"} Review={"0"} Approved={"0"}/>
            <StatmentCard Heading={"Brokerage Statement"} Uploaded={"1"} Review={"0"} Approved={"0"}/>
            <StatmentCard Heading={"MyINV"} Uploaded={"1"} Review={"0"} Approved={"0"}/>

          </div>
        </div>
    </div>
    </div>
  )
}
export default DocumentTypeTemplete ;
