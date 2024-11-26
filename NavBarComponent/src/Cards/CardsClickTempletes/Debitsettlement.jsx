import React from 'react'
import './Debitsettlement.css';
import DocumentClickEvent from './DebitSettlementClickEvent/DocumentClickEvent';

export const Debitsettlement = () => {
  return (
    <div>
      <div style={{display:'grid',gridTemplateColumns:' 250px 1fr',width:'100%', height:'100vh' }}>
        <div style={{  display:'grid',gridTemplateRows:'auto 1fr',padding:'10px',borderRight:'1px solid #4EDEAE'}}>
          <div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
            <a style={{width:'20%'}}>
              <button className='ButtonArrow' style={{backgroundColor:'#FFFFFF'}} ><svg  width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M21 12H3m0 0l8.5-8.5M3 12l8.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
            </a>
            <div style={{width:'80%'}}>
              <div>
                <span><h1>Debit settlement</h1></span>
              </div>
            </div>
          </div>
          <div className='Debit-ul-li'>
            <ul style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <li>
                <a>
                  <span><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M7 2h9.5L21 6.5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 20.5v-14A1.5 1.5 0 014.5 5h9.752a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0118 8.75V20.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 013 20.5z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 5v3.4a.6.6 0 00.6.6H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span>Documents</span>
               </a>
              </li>
              <li>
                <a>
                  <span><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M20 20H4V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 16.5L12 9l3 3 4.5-4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span>Analytics</span>
                </a>
              </li>
              <li>
                <a >
                  <span><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M13 10V3L5 14h6v7l8-11h-6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span>Training</span>
                </a>
              </li>
              <li>
                <a>
                  <span><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M10.05 10.607l-7.07 7.07a2 2 0 000 2.83v0a2 2 0 002.828 0l7.07-7.072M17.193 13.8l3.878 3.878a2 2 0 010 2.828v0a2 2 0 01-2.828 0l-6.209-6.208M6.733 5.904L4.61 6.61 2.49 3.075l1.414-1.414L7.44 3.782l-.707 2.122zm0 0l2.83 2.83" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.05 10.607c-.844-2.153-.679-4.978 1.061-6.718 1.74-1.74 4.95-2.121 6.717-1.06l-3.04 3.04-.283 3.111 3.111-.282 3.04-3.041c1.062 1.768.68 4.978-1.06 6.717-1.74 1.74-4.564 1.905-6.717 1.061" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  <span>Configure</span>
                </a>
              </li>
            </ul>
          </div>
          <div>

          </div>
          </div>
        </div>
        <div>
          <DocumentClickEvent/>
        </div>

      </div>
    </div>
  )
}

export default Debitsettlement;
