import React from 'react';
import './DecumentTypesCards.css'

export const DecumentTypesCards = () => {
  return (
    <div style={{ position: 'relative', top: '50px', left: '50px', display: 'flex',flexDirection:'column' ,justifyContent:'space-between', alignContent: 'center', border: '1px solid rgb(78, 222, 174)', width: '400px', height: '200px', borderRadius:'8px' ,padding:'15px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent:'space-between', alignContent: 'center' }}>
          <div><span style={{ color: '#41444D' }}>Debit settlement</span></div>
          <div>
            <div><svg width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--ds-clr-black)"><path d="M12 12.5a.5.5 0 100-1 .5.5 0 000 1zM12 20.5a.5.5 0 100-1 .5.5 0 000 1zM12 4.5a.5.5 0 100-1 .5.5 0 000 1z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', color:'#6A6C74',alignContent:'center',justifyContent:'center', backgroundColor:'#F7F8FD', borderRadius:'5px',padding:'5px' ,gap:'15px'}}>
          <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
            <div>
              <span>Uploaded: &nbsp;</span>
              <span>1</span>
            </div>
            <div style={{color:'#6576FC'}}>
              <span>View documents</span>
              <span><button><svg width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#6576FC"><path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <span>Review Pending: &nbsp; </span>
            <span>0</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <span>Approved: &nbsp; </span>
            <span>1</span>
          </div>
        </div>
      </div>
      <div className="card-footer" style={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }} >
        <div>
          <button style={{color:'#5568FC', backgroundColor:'#FFFFFF'}}>
            <span><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M14.363 5.652l1.48-1.48a2 2 0 012.829 0l1.414 1.414a2 2 0 010 2.828l-1.48 1.48m-4.243-4.242l-9.616 9.615a2 2 0 00-.578 1.238l-.242 2.74a1 1 0 001.084 1.085l2.74-.242a2 2 0 001.24-.578l9.615-9.616m-4.243-4.242l4.243 4.242" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            <span>Edit Fields</span>
          </button>
        </div>
        <div>
          <button style={{color:'#7383FD', backgroundColor:'#FFFFFF'}}>
            <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6 20h12M12 16V4m0 0l3.5 3.5M12 4L8.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            <span>Upload</span>
          </button>
        </div>
        <div>
          <button style={{color:'#A9AEB5', backgroundColor:'#FFFFFF'}}>
            <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            <span>Review </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DecumentTypesCards;
