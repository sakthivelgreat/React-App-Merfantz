import './ProfileDetails.css';
import './ProfileApp.css';
export const ProfileDetails = () => {
  return (
    <div className='profileDatails'>
      <div className="profile-dropdown" >
        <div  style={{ display:'flex',justifyContent:'center',}}>
          <div style={{  display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center', borderRadius:'8px' , border:'1px solid #DFE0E3',width:'90%'}}>
          <div  style={{ width:'100%',height:'100%',backgroundColor:'#F2F4FF' ,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{ width:'20%', display:'flex',justifyContent:'center', alignItems:'center' ,height:'100%',backgroundColor:'#F2F4FF'}}><svg style={{backgroundColor:'#F2F4FF'}} width="1.25em" color='#576AFC' height="1.25em" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.889 13.778c0 1.533 2.488 2.778 5.555 2.778 3.068 0 5.556-1.245 5.556-2.778M1 8.222C1 9.756 3.488 11 6.556 11c1.25 0 2.405-.207 3.333-.555M1 12.11c0 1.534 2.488 2.778 5.556 2.778 1.25 0 2.404-.207 3.333-.556m5.555-2.222c-3.067 0-5.555-1.244-5.555-2.778 0-1.533 2.488-2.777 5.555-2.777C18.512 6.556 21 7.8 21 9.333c0 1.534-2.488 2.778-5.556 2.778Z" stroke="#4D61FC" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 3.778V16c0 1.533 2.488 2.778 5.556 2.778 1.25 0 2.404-.207 3.333-.556m0 0V9.333m0 8.89c0 1.533 2.488 2.777 5.555 2.777C18.512 21 21 19.756 21 18.222V9.333m-8.889-2.222V3.778" stroke="#4D61FC" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.556 6.556C3.488 6.556 1 5.31 1 3.778 1 2.244 3.488 1 6.556 1c3.067 0 5.555 1.244 5.555 2.778 0 1.533-2.488 2.778-5.555 2.778Z" stroke="#4D61FC" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
            <div style={{ width:'80%', height:'100%',backgroundColor:'#FFFFFF' ,display:'flex'}}>
              <p style={{ display:'flex',  justifyContent:'left',width:'100%', flexDirection:'column',padding:'5px'}}>
                <span>Pages</span>
                <span>7/0</span>
              </p>
            </div>
          </div>
          <div style={{ width:'100%'}}>
            <button className="buy-balance">Buy Balance →</button>
          </div>
          </div>
        </div>
        <hr/>
        <div>
        <div  style={{ width:'100%',display:'flex', alignItems:'center'}}>
          <div><svg width="1.5em" stroke-width="1.5" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color='#575A62'><path d="M18.5 15h-13" stroke="currentColor" stroke-linejoin="round"></path><path d="M16 4H8M9 4.5v5.76a2 2 0 01-.481 1.302L3.48 17.438A2 2 0 003 18.74V19a2 2 0 002 2h14a2 2 0 002-2v-.26a2 2 0 00-.482-1.302l-5.037-5.876A2 2 0 0115 10.26V4.5M12 9.01l.01-.011M11 2.01l.01-.011" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
          <div><span style={{ color:'#575A62'}}>Test Mode</span></div>
        </div>
        </div>
        <hr />
        <div className='profile-button' style={{display:'flex',alignItems:'center', flexDirection:'column' , width:'100%'} } >
          <button style={{ position:'relative',right:'5px',backgroundColor:'#FFFFFF', width:'100%', display:'flex',alignItems:'center'}} >
          <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color='#6C6F76' class="CvOc3"><path d="M8 14h8M8 10h2M8 18h4M10 3H6a2 2 0 00-2 2v15a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-3.5M10 3V1m0 2v2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <span style={{color:'#575A62'}}>Activity Logs</span>
          </button>
           <button  style={{position:'relative',right:'5px',backgroundColor:'#FFFFFF', width:'100%' ,display:'flex'}}>
           <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color='#575A62' class="CvOc3"><path d="M12 12h7m0 0l-3 3m3-3l-3-3M19 6V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
           <span style={{ color:'#6C6F76'}} >Logout</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
