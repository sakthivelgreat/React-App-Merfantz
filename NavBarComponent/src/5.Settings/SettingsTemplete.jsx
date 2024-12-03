import React from 'react'
import './SettingsTemplete.css';

export const SettingsTemplete = () => {
  return (
    <div>
      <div style={{display:'grid',gridTemplateColumns:' 250px 1fr',width:'100%', height:'100vh' }}>
        <div style={{  display:'grid',gridTemplateRows:'auto 1fr',padding:'10px',borderRight:'1px solid #4EDEAE'}}>
          <div style={{flexBasis:''}}>
            <div className='Debit-ul-li'>
              <ul style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <li>
                  <a>
                    <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1" stroke="currentColor" stroke-linecap="round"></path><path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="12" r="10" stroke="currentColor"></circle></svg></span>
                    <span style={{fontWeight:'500',fontSize:'14px' ,fontFamily:'"Inter", sans-serif'}}>Account Settings</span>
                </a>
                </li>
                <li>
                  <a>
                    <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M1 20v-1a7 7 0 017-7v0a7 7 0 017 7v1" stroke="currentColor" stroke-linecap="round"></path><path d="M13 14v0a5 5 0 015-5v0a5 5 0 015 5v.5" stroke="currentColor" stroke-linecap="round"></path><path d="M8 12a4 4 0 100-8 4 4 0 000 8zM18 9a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                    <span style={{fontWeight:'500',fontSize:'14px',fontFamily:'"Inter", sans-serif'}}>Users</span>
                  </a>
                </li>
                <li>
                  <a >
                    <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M3 12h18M3 12v4.5M3 12V7.5M21 12v4.5m0-4.5V7.5m-18 9v3.9a.6.6 0 00.6.6h16.8a.6.6 0 00.6-.6v-3.9m-18 0h18m0-9V3.6a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6v3.9m18 0H3" stroke="currentColor"></path></svg></span>
                    <span style={{fontWeight:'500',fontSize:'14px',fontFamily:'"Inter", sans-serif'}}>Database Tables</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M10.05 10.607l-7.07 7.07a2 2 0 000 2.83v0a2 2 0 002.828 0l7.07-7.072M17.193 13.8l3.878 3.878a2 2 0 010 2.828v0a2 2 0 01-2.828 0l-6.209-6.208M6.733 5.904L4.61 6.61 2.49 3.075l1.414-1.414L7.44 3.782l-.707 2.122zm0 0l2.83 2.83" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.05 10.607c-.844-2.153-.679-4.978 1.061-6.718 1.74-1.74 4.95-2.121 6.717-1.06l-3.04 3.04-.283 3.111 3.111-.282 3.04-3.041c1.062 1.768.68 4.978-1.06 6.717-1.74 1.74-4.564 1.905-6.717 1.061" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                    <span style={{fontWeight:'500',fontSize:'14px',fontFamily:'"Inter", sans-serif'}}>Integrations</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M11.732 21.866l-5.52-2.76A4 4 0 014 15.528V2.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6v12.928a4 4 0 01-2.211 3.578l-5.52 2.76a.6.6 0 01-.537 0zM12 10V2M4 10h16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>   
                    <span style={{fontWeight:'500',fontSize:'14px',fontFamily:'"Inter", sans-serif'}}>Security</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M3 20.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z" stroke="currentColor"></path><path d="M15 8.5c-.685-.685-1.891-1.161-3-1.191M9 15c.644.86 1.843 1.35 3 1.391m0-9.082c-1.32-.036-2.5.561-2.5 2.191 0 3 5.5 1.5 5.5 4.5 0 1.711-1.464 2.446-3 2.391m0-9.082V5.5m0 10.891V18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                    <span style={{fontWeight:'500',fontSize:'14px',fontFamily:'"Inter", sans-serif'}}>Billing</span>
                  </a>
                </li>
              </ul>
            </div>
          <div>
          </div>
          </div>
        </div>
        <div>
        <div className='Header-div' style={{ height:'10%',borderBottom:'1px solid #DDDDDD'}}>
          <div style={{ display:'flex',justifyContent:'space-between',gap:'100px',alignItems:'center',width:'100%',height:'100%'}}>
            <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>          
              <div style={{display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'0px 15px'}}><span style={{fontSize:'18px',fontFamily:'Inter, sans-serif',fontWeight:'600'}}>Account Settings</span></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
