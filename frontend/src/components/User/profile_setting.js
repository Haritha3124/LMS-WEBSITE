import React, { useState } from 'react';

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    country: '',
    timezone: '',
    phoneNumber: '',
    address: '',
    profilePicture: null,
    emailNotifications: false,
    language: 'en',
    accessibility: '',
    educationalBackground: '',
    privacySettings: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to server or perform necessary actions
    console.log(formData);
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input type="text" id="firstName" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input type="text" id="lastName" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} />
        </div>
        {/* Profile Picture */}
        <div className="mb-3">
          <label htmlFor="profilePicture" className="form-label">Profile Picture:</label>
          <input type="file" id="profilePicture" name="profilePicture" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" className="form-control" value={formData.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender:</label>
          <select id="gender" name="gender" className="form-select" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {/* Repeat similar structure for other fields */}
        
        
        
        {/* Notification Settings */}
        <div className="mb-3 form-check">
          <input type="checkbox" id="emailNotifications" name="emailNotifications" className="form-check-input" checked={formData.emailNotifications} onChange={handleChange} />
          <label htmlFor="emailNotifications" className="form-check-label">Email Notifications</label>
        </div>

        {/* Language Preference */}
        {/* <div className="mb-3">
          <label htmlFor="language" className="form-label">Language:</label>
          <select id="language" name="language" className="form-select" value={formData.language} onChange={handleChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option> */}
            {/* Add more language options as needed */}
          {/* </select> */}
        {/* </div> */}

        {/* Accessibility Settings */}
        {/* <div className="mb-3">
          <label htmlFor="accessibility" className="form-label">Accessibility:</label>
          <input type="text" id="accessibility" name="accessibility" className="form-control" value={formData.accessibility} onChange={handleChange} />
        </div> */}

        {/* Educational Background */}
        {/* <div className="mb-3">
          <label htmlFor="educationalBackground" className="form-label">Educational Background:</label>
          <textarea id="educationalBackground" name="educationalBackground" className="form-control" value={formData.educationalBackground} onChange={handleChange} />
        </div> */}

        {/* Privacy Settings */}
        {/* <div className="mb-3">
          <label htmlFor="privacySettings" className="form-label">Privacy Settings:</label>
          <input type="text" id="privacySettings" name="privacySettings" className="form-control" value={formData.privacySettings} onChange={handleChange} />
        </div> */}

        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileSettings;
