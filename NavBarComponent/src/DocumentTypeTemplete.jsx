import React from 'react'
import './documentTypeTemplete.css';

export const DocumentTypeTemplete = () => {
  return (
    <div className='main-Decument'>
      <main>
        <div className='main-navbar'>
          <div>
            <h1>Document Type</h1>
          </div>
          <div>
            <div>
            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="BwBqp"><path d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <input class="wV4CY" placeholder="Search document type" title="Search (Ctrl + F)" data-hj-allow="true" value=""></input>
            </div>
            <span></span>
            <button type='button'>
              <span>
              <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6 12h6m6 0h-6m0 0V6m0 6v6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
              <span>Add Document Type</span>
            </button>
          </div>
        </div>
        -------
        <div></div>
      </main>
    </div>
  )
}
export default DocumentTypeTemplete ;
