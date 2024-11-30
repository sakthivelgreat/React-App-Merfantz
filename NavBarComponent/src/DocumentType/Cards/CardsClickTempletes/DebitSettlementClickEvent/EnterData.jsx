import React from 'react'
import './DocumentClickEvent.css';

export const EnterData = () => {
  return (
    <div>
        <div className='EnterData' style={{display:'grid',gridTemplateColumns:'auto 1fr',padding:'10px 10px',borderBottom:'1px solid #DFE0E3'}}>
            <div className='checkbox ' style={{display:'flex',justifyContent:'center',alignItems:'center' }} >
              <input type="checkbox" className='custom-checkbox1' />
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
              <div style={{flexBasis:'25%'}}>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <span><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M4 21.4V2.6a.6.6 0 01.6-.6h11.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0120 5.75V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2v3.4a.6.6 0 00.6.6H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                        <span style={{padding:'0px ',fontWeight:'400' ,fontSize:'12px',color:'#201C34',fontFamily: '"Inter", sans-serif'}}>sample_debit_collection_ndr.pdf</span>
                    </div>                    
                    <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                </div>
              </div>
              <div style={{flexBasis:'15%'}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div style={{display:'flex',justifyContent:'center',padding:'2px 5px',alignItems:'center', border:'1px solid #BBF7D0',backgroundColor:'#F0FDF4',borderRadius:'8px'}}><button style={{all:'unset'}}><span style={{color:'#158048',fontWeight:'500',fontSize:'12px'}}>Processed</span></button></div>
                </div>
              </div>
              <div style={{flexBasis:'15%'}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center', gap:'5px',justifyContent:'center',color:'#111827'}}>
                    <div style={{width:'25px',height:'25px',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#F2F4FF',borderRadius:'50%'}}><span >D</span></div>
                  <span  style={{fontWeight:'500',fontSize:'12px'}}>docSumo salesforce</span>
                </div>
              </div>
              <div style={{flexBasis:'15%'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',color:'#111827'}}>
                    <span>10 Sep 2024</span>
                    <span>8:11 PM</span>  
                </div>
              </div>
              <div style={{flexBasis:'15%'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',color:'#111827'}}>
                    <span>5 May 2022</span>
                    <span>2:21 PM</span>
                </div>
              </div>

            </div>
          </div>
    </div>
  )
}
