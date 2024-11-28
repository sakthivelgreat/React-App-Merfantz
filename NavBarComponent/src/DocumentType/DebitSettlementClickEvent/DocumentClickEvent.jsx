import React from 'react'
import './DocumentClickEvent.css';

export const DocumentClickEvent = () => {
  return (
    <div style={{overflow:'auto'}}>
      <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100vh'}}>
        <div className='Header-div' style={{ height:'10%',borderBottom:'1px solid #DDDDDD'}}>
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
                  <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xm lns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
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
        <div style={{ display:'flex',justifyContent:'space-between', alignItems:'center',padding:'10px', height:'auto',borderBottom:'1px solid #DDDDDD'}}>
          <div style={{ display:'flex', borderBottom:'1px solid #D0D2D6'}}>
            <div className='Second-Header-div'>
              <span style={{ color:'#41448C'}}><svg width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M4 21.4V2.6a.6.6 0 01.6-.6h11.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0120 5.75V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2v3.4a.6.6 0 00.6.6H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
              <p style={{color:'#41448C'}}>All Files</p>
              <span><span style={{padding:'2px 8px', borderRadius:'5px',border:'1px solid #C4D6FF'}} >1</span></span>
            </div>
            <div className='Second-Header-div'>
              <span style={{color:'#414458'}}> <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
              <p style={{color:'#414458'}}>Review</p>
            </div>
            <div className='Second-Header-div'>
              <span style={{color:'#60444D'}}><svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M18 7v10M6.972 5.267A.6.6 0 006 5.738v12.524a.6.6 0 00.972.47l7.931-6.261a.6.6 0 000-.942L6.972 5.267z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
              <p style={{color:'#60444D'}}>Skipped</p>
            </div>
            <div className='Second-Header-div'>
              <span style={{color:'#41444D'}}><svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M1.5 12.5l4.076 4.076a.6.6 0 00.848 0L9 14M16 7l-4 4" stroke="currentColor" stroke-linecap="round"></path><path d="M7 12l4.576 4.576a.6.6 0 00.848 0L22 7" stroke="currentColor" stroke-linecap="round"></path></svg></span>
              <p style={{color:'#41444D'}}>Processed</p>
              <span style={{color:'#41444D'}}><span style={{padding:'2px 8px', borderRadius:'5px',border:'1px solid #C4D6FF'}} >1</span></span>
            </div>
          </div>
          <div>
            <div className='Second-Header-search-Bar'  style={{ display :'flex', justifyContent:'center',alignItems :'center',width:'18em',borderRadius:'5px', padding:'2px 0px' ,border:'1px solid #D0D2D6'}}>
              <svg style={{width:'10%'}} width="1.25em" height="1.25em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="BwBqp"><path d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <input className='input-search' style={{width:'80%',padding : ' 2px', border:'none',outline: 'none' , fontSize: '14px',backgroundColor:'' }}  placeholder="Search document type" title="Search (Ctrl + F)" data-hj-allow="true" value=""></input>
            </div>
          </div>
        </div>
        <div style={{ flex:'5',borderBottom:'1px solid #DDDDDD'}}></div>
        <div style={{ flex:'1',borderBottom:'1px solid #DDDDDD'}}></div >
      </div>
    </div>
  )
}
export default DocumentClickEvent;