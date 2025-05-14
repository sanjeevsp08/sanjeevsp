import React from 'react';
import './Notification.css';
function Notification() {
  return (
    <div className="container">
      <h1>Instagram Profile </h1>
      
      <div className="profile-card">
        <div className="notification-badge">3</div>

        <img 
          src={'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsQuJkzlA5nkhVVtV5sdj0OvpYfUjZHayyqGzO6HsqtRlfhPznqVuF2x8BI4AbtMi9HV4anvBpWoVBCjNUqSRw-g'} 
          alt="Profile" 
          className="profile-image"
        />
        <h3>SACHIN TANDULKAR</h3>
        <p>CRICKET PLAYARE</p>
      </div>
      <div className="container">
  <h1>Whatsapp</h1>
  
  <div className="profile-card">
    <div className="notification-badge">3</div>
    <img 
          src={'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsQuJkzlA5nkhVVtV5sdj0OvpYfUjZHayyqGzO6HsqtRlfhPznqVuF2x8BI4AbtMi9HV4anvBpWoVBCjNUqSRw-g'} 
      alt="Profile" 
      className="profile-image"
    />
    <h3>SACHIN TANDULKAR</h3>
    <p>CRICKET PLAYARE</p>
  </div>
</div>

    </div>
  );
}

export default Notification;