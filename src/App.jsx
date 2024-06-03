// File: src/App.js
import React, { useState } from 'react';
import './App.css';
import './'

function App() {
  const [user, setUser] = useState({
    fullName: 'Lucian Obrien',
    email: 'ashlynn_ohara62@gmail.com',
    phone: '904-966-2836',
    country: 'United Arab Emirates',
    state: 'Virginia',
    city: 'Rancho Cordova',
    address: '908 Jack Locks',
    zip: '85807',
    company: 'Gleichner, Mueller and Tromp',
    role: 'Data Analyst',
    banned: true,
    emailVerified: true,
    profilePic: 'flower.jpg'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setUser({ ...user, [name]: checked });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({ ...user, profilePic: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteUser = () => {
    console.log('User deleted');
  };

  return (
    <div className="user-edit">
      <h2>Edit User</h2>
      <div className="profile-pic-section">
       <img
          src={user.profilePic || 'https://via.placeholder.com/150'}
          alt="Profile"
        />
        <input type="file" accept=".jpeg, .jpg, .png, .gif" onChange={handleImageUpload} />
        <p>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb</p>
      </div>
      <form>
        <label>
          Full Name:
          <input type="text" name="fullName" value={user.fullName} onChange={handleInputChange} />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" value={user.email} onChange={handleInputChange} />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phone" value={user.phone} onChange={handleInputChange} />
        </label>
        <label>
          Country:
          <select name="country" value={user.country} onChange={handleInputChange}>
            <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Argentina">Argentina</option>
              <option value="Berlin">Berlin</option>
              <option value="Bangladesh">Bangladesh</option>
               <option value="Greece">Greece</option>
               <option value="India">India</option>
               <option value="Israel"> Israel</option>
               <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          State/Region:
          <input type="text" name="state" value={user.state} onChange={handleInputChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={user.city} onChange={handleInputChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={user.address} onChange={handleInputChange} />
        </label>
        <label>
          Zip/Code:
          <input type="text" name="zip" value={user.zip} onChange={handleInputChange} />
        </label>
        <label>
          Company:
          <input type="text" name="company" value={user.company} onChange={handleInputChange} />
        </label>
        <label>
          Role:
          <input type="text" name="role" value={user.role} onChange={handleInputChange} />
        </label>
        <div className="toggles">
          <label>
            Banned:
            <input type="checkbox" name="banned" checked={user.banned} onChange={handleToggleChange} />
          </label>
          <label>
            Email Verified:
            <input type="checkbox" name="emailVerified" checked={user.emailVerified} onChange={handleToggleChange} />
          </label>
        </div>
        <button type="button" onClick={handleDeleteUser} className="delete-button">Delete User</button>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
}

export default App;
