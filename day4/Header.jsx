import React from 'react';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [liked, setLiked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setOpen] = useState(false);

  const headerStyles = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '50px 0',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'fixed', // Make the header fixed
    top: '0', // Stick it to the top
    left: '0',
    padding: '20px 0',
    zIndex: '500', // Add a higher z-index to ensure it's above other elements
  };

  const headingStyles = {
    margin: '0',
    fontSize: '2rem',
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    setShowOptions(!showOptions);
  };

  const heartIconStyles = {
    position: 'relative',
    right: '100px',
    bottom: '-50px',
    cursor: 'pointer',
  };

  const optionsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    position: 'absolute',
    border: '1px solid #ccc',
    borderRadius: '5px',
    borderWidth: '30px',
    borderStyle: 'solid',
    borderColor: 'grey',
    top: '100px',
    left: '100px',
    transform: 'translateX(-50%)',
    backgroundColor: 'grey',
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <header style={headerStyles}>
      <div>
        <h1 style={headingStyles}>ARTNEST</h1>
        <div
          onClick={handleLikeClick}
          style={{
            position: 'absolute',
            display:'flex',
            top: '20px',
            left: '50px',
          }}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        {showOptions && (
          <form className="form" style={optionsContainerStyles}>
            <button
              type="button"
              name="exhibit"
              value="Exhibit"
              onClick={() => handleOptionClick('Exhibit')}
            >
              Exhibit
            </button>
            <button
              type="button"
              name="display"
              value="Display"
              onClick={() => handleOptionClick('Display')}
            >
              Display
            </button>
            <button
              type="button"
              name="collaboration"
              value="Collaboration"
              onClick={() => handleOptionClick('Collaboration')}
            >
              Collaboration
            </button>
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
