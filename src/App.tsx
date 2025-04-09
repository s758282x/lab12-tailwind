import { useState, useRef } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="profile-card bg-gray-100 p-6 rounded-xl shadow-md max-w-sm mx-auto">
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        ref={fileInputRef}
      />

      {/* Profile image */}
      <div className="flex justify-center mb-6">
        <div
          onClick={handleProfileImageClick}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-gray-400 transition"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-3xl text-gray-500">+</span>
          )}
        </div>
      </div>

      {/* Name input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field w-full sm:w-72 px-4 py-2 rounded-lg border border-gray-300 focus:border-red-400 focus:outline-none"
        />
      </div>

      {/* Bio input */}
      <div className="mb-4">
        <textarea
          rows={3}
          placeholder="Write a short bio about yourself..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="input-field w-full sm:w-72 px-4 py-2 rounded-lg border border-gray-300 resize-none focus:border-red-400 focus:outline-none"
        ></textarea>
      </div>

      {/* Save button */}
      <button className="!bg-red-200 hover:!bg-red-500 text-white text-sm px-4 py-2 rounded-lg w-full sm:w-72 transition-colors duration-200">
      Save Changes
      </button>


    </div>
  );
}

export default App;
