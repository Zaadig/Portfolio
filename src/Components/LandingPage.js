import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const onLeftClick = () => {
    navigate('/professional');
  };

  const onRightClick = () => {
    navigate('/music');
  };

  return (
    <div className="split-screen">
      <div className="left" onClick={onLeftClick}>
        <div className="centered-text">Professional</div>
      </div>
      <div className="right" onClick={onRightClick}>
        <div className="centered-text">Music</div>
      </div>
    </div>
  );
};

export default LandingPage;
