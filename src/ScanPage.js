// Camera.js

import React, { useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { storage } from './firebase.config'; // Import storage from firebase.config
import { useNavigate } from 'react-router-dom';
import { CgSpinner } from 'react-icons/cg';
import './ScanPage.css'; // Import the CSS file

const Camera = ({ user }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const webcamRef = React.useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  const uploadImage = async () => {
    if (image) {
      setUploading(true);
      try {
        const response = await fetch(image);
        const blob = await response.blob();
        const ref = storage.ref().child(`images/${user.uid}/${Date.now()}.jpg`); // Access storage and upload image
        await ref.put(blob);
        const url = await ref.getDownloadURL();
        alert('Image uploaded successfully');
        console.log('Image URL:', url);
      } catch (error) {
        console.error('Error uploading image:', error);
      } finally {
        setUploading(false);
        navigate('/'); // Navigate back to home or another route
      }
    }
  };

  return (
    
    <div className="camera-container">
    <text className='Text'>Upload you college ID Card</text>
      <div className="camera-card">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="camera-preview"
        />
        <div className="button-group">
          <button
            onClick={capture}
            className="button"
          >
            Capture
          </button>
          {image && (
            <button
              onClick={uploadImage}
              className="upload-button"
              disabled={uploading}
            >
              {uploading ? (
                <span>
                  <CgSpinner className="animate-spin inline-block mr-1" />
                  Uploading...
                </span>
              ) : (
                <span>Upload</span>
              )}
            </button>
          )}
        </div>
        {image && (
          <div className="mt-4">
            <img src={image} alt="Captured" className="rounded-lg shadow-md" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Camera;
