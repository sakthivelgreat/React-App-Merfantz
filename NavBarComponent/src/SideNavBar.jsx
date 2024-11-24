import './SideBar.css';
import Card from '@mui/material/Card';

export const SideNavBar = () => {
  return (
  <div className='Main-sidebar'>
      <ul>
        <li>
          <a href="#">
            <div className='div-svg'>
            <svg width="1.25em" height="1.25em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" 
               xmlns="http://www.w3.org/2000/svg" color="currentColor">
              <path d="M7 18h7M7 14h1M7 10h3M7 2h9.5L21 6.5V19"
               stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                </path><path d="M3 20.5v-14A1.5 1.5 0 014.5 5h9.752a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0118 8.75V20.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 013 20.5z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 5v3.4a.6.6 0 00.6.6H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <div><p>Document <br/> Types</p></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className='div-svg'>
            <svg width="1.25em" height="1.25em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M7 6h10M7 9h10M9 17h6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12h-.4a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6v-8.8a.6.6 0 00-.6-.6H21M3 12V2.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6V12M3 12h18" stroke="currentColor"></path></svg>
            </div>
            <div><p>All <br/> Documents</p></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className='div-svg'><svg width="1.25em" height="1.25em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M21 7.353v9.294a.6.6 0 01-.309.525l-8.4 4.666a.6.6 0 01-.582 0l-8.4-4.666A.6.6 0 013 16.647V7.353a.6.6 0 01.309-.524l8.4-4.667a.6.6 0 01.582 0l8.4 4.667a.6.6 0 01.309.524z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.528 7.294l8.18 4.544a.6.6 0 00.583 0l8.209-4.56M12 21v-9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
            <div><p>All Models</p></div>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <div className='div-svg'><svg width="1.25em" height="1.25em" fill="none" xmlns="http://www.w3.org/2000/svg" class="Xa9dA"><path d="M9.263 18.94v-3.195h-4.18a1.77 1.77 0 0 1-1.253-.518l-1.563-1.563A.852.852 0 0 1 2 13.042c0-.237.089-.445.267-.622l1.563-1.564a1.77 1.77 0 0 1 1.253-.518h4.18V8.372H3.516a.862.862 0 0 1-.633-.254.864.864 0 0 1-.255-.639V3.86c0-.256.085-.47.255-.639a.862.862 0 0 1 .633-.254h5.747V1.737c0-.209.07-.384.212-.525A.714.714 0 0 1 10 1c.21 0 .384.07.525.212a.714.714 0 0 1 .212.525v1.229h4.18a1.77 1.77 0 0 1 1.253.518l1.563 1.563A.852.852 0 0 1 18 5.67a.852.852 0 0 1-.267.622L16.17 7.854a1.77 1.77 0 0 1-1.253.518h-4.18v1.966h5.747c.252 0 .463.085.633.255.17.17.255.382.255.639v3.62c0 .256-.085.469-.255.639a.861.861 0 0 1-.633.254h-5.747v3.194c0 .21-.07.384-.212.526a.714.714 0 0 1-.525.212.713.713 0 0 1-.526-.212.714.714 0 0 1-.211-.526ZM4.103 6.897h10.946l1.229-1.229-1.229-1.229H4.102v2.458Zm.848 7.372h10.947v-2.457H4.95l-1.229 1.229 1.229 1.228Z" fill="#667085"></path></svg></div>
            <div><p>Get Started</p></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className='div-svg'><svg width="1.25em" height="1.25em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M14 20.4v-5.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6zM3 20.4v-5.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6zM14 9.4V3.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6zM3 9.4V3.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z" stroke="currentColor"></path></svg></div>
            <div><p>AI Models <br/> Hub</p></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className='div-svg'><svg width="1.25em" height="1.25em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
            <div><p>Settings</p></div>
          </a>
        </li>
      </ul>
  </div>
    
  )
}
export default SideNavBar;