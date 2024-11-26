import React from 'react'
import './DocumentClickEvent.css';

export const DocumentClickEvent = () => {
  return (
    <div style={{overflow:'auto'}}>
      <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100vh'}}>
        <div className='Header-div' style={{ flex:'1',borderBottom:'1px solid #DDDDDD'}}>
          <div style={{ display:'flex',justifyContent:'space-between',gap:'100px',alignItems:'center',width:'100%',height:'100%'}}>
            <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>          
              <div style={{display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'0px 15px'}}><span style={{fontSize:'18px',fontFamily:'Inter, sans-serif',fontWeight:'600'}}>Documents</span></div>
            </div>
            <div style={{ display:'flex', gap:'20px',flexDirection:'row',justifyContent:"center",alignItems:'center',padding:'2px'}}>
              <div className='Header-div-button'>
                <div><button><span><svg width="1.125rem" height="1.125rem" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 12.5a.5.5 0 100-1 .5.5 0 000 1zM12 20.5a.5.5 0 100-1 .5.5 0 000 1zM12 4.5a.5.5 0 100-1 .5.5 0 000 1z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button></div>
              </div>
              <div className='Header-div-button'>
                <button>
                  <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6 20h12M12 16V4m0 0l3.5 3.5M12 4L8.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span>Upload</span>
                </button>
              </div>
              <div className='Header-div-button'>
                <button>
                  <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span>Download data</span>
                </button>
              </div>
              <div className='Header-div-button' style={{ backgroundColor:'#273CDD'}}>
                <button style={{ backgroundColor:'#273CDD',color:'white'}}>
                  <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span>Start Reviewing</span>
                </button>
              </div>
            </div>

          </div>
        </div>
        <div style={{ flex:'1.5',borderBottom:'1px solid #DDDDDD'}}></div>
        <div style={{ flex:'5',borderBottom:'1px solid #DDDDDD'}}></div>
        <div style={{ flex:'1',borderBottom:'1px solid #DDDDDD'}}></div>
      </div>
    </div>
  )
}
export default DocumentClickEvent;