import React from 'react'
import './AllModels.css';

export const AllModels = () => {
  return (
    <div style={{overflow:'auto'}}>
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100vh'}}>
      <div className='Header-div' style={{ height:'10%',borderBottom:'1px solid #DDDDDD'}}>
        <div style={{ display:'flex',justifyContent:'space-between',gap:'100px',alignItems:'center',width:'100%',height:'100%'}}>
          <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>          
            <div style={{display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'0px 15px'}}><span style={{fontSize:'18px',fontFamily:'Inter, sans-serif',fontWeight:'600'}}>All models</span></div>
          </div>
          <div style={{ display:'flex', gap:'20px',flexDirection:'row',justifyContent:"center",alignItems:'center',padding:'2px'}}>
            <div className='Header-div-button' style={{ backgroundColor:'#273CDD',padding:'0px 10px'}}>
              <button style={{ backgroundColor:'#273CDD',color:'white',padding:'10px 20px'}}>
                <span>Train new model</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div style={{display:'grid', gridTemplateRows:'auto 1fr',flex:'5'}}>
        <div style={{display:'grid',gridTemplateColumns:'auto 1fr',padding:'10px 10px', backgroundColor:'#FAFAFA',borderBottom:'1px solid #DFE0E3'}}>
          <div className='checkbox ' style={{display:'flex',justifyContent:'center',alignItems:'center' }} >
            <input type="checkbox" className='custom-checkbox' />
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
            <div style={{flexBasis:'15%'}}><span style={{padding:'0px 10px', WebkitTextStroke:'0.3px black',fontWeight:'500' ,fontSize:'12px',color:'#2C323F',fontFamily: '"Inter", sans-serif'}}>Model name</span></div>
            <div style={{flexBasis:'10%'}}>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <span style={{fontWeight:'500',fontSize:'12px',color:'#111827', WebkitTextStroke:'0.3px black'}}>Document type</span>
              </div>
            </div>
            <div style={{flexBasis:'10%'}}>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <span style={{fontWeight:'500',fontSize:'12px', WebkitTextStroke:'0.3px black',color:'#111827'}}>Accuracy</span>
                <div><svg style={{color:'#A9ADB5'}} width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--ds-clr-gray-800)"><path d="M14 14H2M10 10H2M6 6H2M18 18H2M19 14V4m0 0l3 3m-3-3l-3 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
              </div>
            </div>
            <div style={{flexBasis:'15%'}}>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center',color:'#111827'}}>
                <span  style={{fontWeight:'500',fontSize:'12px', WebkitTextStroke:'0.3px black'}}>Documents used</span>
                <div><svg style={{color:'#A9ADB5'}} width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--ds-clr-gray-800)"><path d="M14 14H2M10 10H2M6 6H2M18 18H2M19 14V4m0 0l3 3m-3-3l-3 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
              </div>
            </div>
            <div style={{flexBasis:'10%'}}>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center',color:'#111827'}}>
                <span  style={{fontWeight:'500',fontSize:'12px', WebkitTextStroke:'0.3px black'}}>Training type</span>
                <div><svg width="1rem" height="1rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#8E949E" class="d-flex align-items-center justify-content-center"><path d="M4 3h16a1 1 0 011 1v1.586a1 1 0 01-.293.707l-6.415 6.414a1 1 0 00-.292.707v6.305a1 1 0 01-1.243.97l-2-.5a1 1 0 01-.757-.97v-5.805a1 1 0 00-.293-.707L3.292 6.293A1 1 0 013 5.586V4a1 1 0 011-1z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
              </div>
            </div>
            <div style={{flexBasis:'10%'}}>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center',color:'#111827'}}>
                <span  style={{fontWeight:'500',fontSize:'12px', WebkitTextStroke:'0.3px black'}}>Model type</span>
                <div><svg width="1rem" height="1rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#8E949E" class="d-flex align-items-center justify-content-center"><path d="M4 3h16a1 1 0 011 1v1.586a1 1 0 01-.293.707l-6.415 6.414a1 1 0 00-.292.707v6.305a1 1 0 01-1.243.97l-2-.5a1 1 0 01-.757-.97v-5.805a1 1 0 00-.293-.707L3.292 6.293A1 1 0 013 5.586V4a1 1 0 011-1z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
              </div>
            </div>
            
            <div style={{flexBasis:'12%'}}>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center',color:'#111827'}}>
                <span  style={{fontWeight:'500',fontSize:'12px', WebkitTextStroke:'0.3px black'}}>Date added</span>
                <div><svg width="1rem" height="1rem" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#8E949E" class="d-flex align-items-center justify-content-center"><path d="M4 3h16a1 1 0 011 1v1.586a1 1 0 01-.293.707l-6.415 6.414a1 1 0 00-.292.707v6.305a1 1 0 01-1.243.97l-2-.5a1 1 0 01-.757-.97v-5.805a1 1 0 00-.293-.707L3.292 6.293A1 1 0 013 5.586V4a1 1 0 011-1z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                <div><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#8E949E"><path d="M14 10H2M10 14H2M6 18H2M18 6H2M19 10v10m0 0l3-3m-3 3l-3-3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
              </div>
            </div>
            <div style={{flexBasis:'18%'}}>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center',color:'#111827'}}>
                <span  style={{fontWeight:'500',fontSize:'12px', WebkitTextStroke:'0.3px black'}}>Enabled in</span>
              </div>
            </div>

          </div>
        </div>
        <div>
               
               
        </div>
      </div>
      <div style={{ flex:'5%',display:'flex',alignItems:'flex-start',justifyContent:'center'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
          <button style={{all:'unset'}}><span><svg  style={{fontWeight:'500',fontSize:'16px'}} width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#6B7280"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button>
          <button style={{all:'unset',height:'30px',width:'30px',backgroundColor:'#F2F4FF',borderRadius:'8px',border:'1px solid #4D61FC',textAlign:'center'}}><span style={{fontWeight:'500',fontSize:'16px'}}>1</span></button>
          <button style={{all:'unset'}}><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#6B7280"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
        </div>
      </div >
    </div>
  </div>
  )
}
