import './ProfileDetails.css';
import './ProfileApp.css';
export const ProfileDetails = () => {
  return (
    <div className='profileDatails'>
      <div className="profile-dropdown">
        <div className="dropdown-section balance-info">
          <div className="balance-text">
            <p>Pages</p>
            <span>7/0</span>
          </div>
          <button className="buy-balance">Buy Balance →</button>
        </div>
        <hr />
        <div className="dropdown-section">
          <label className="toggle-test-mode">
            Test Mode
            <input type="checkbox" />
          </label>
        </div>
        <hr />
        <div className="dropdown-section links">
          <div className="link-item">Activity Logs</div>
          <div className="link-item">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
