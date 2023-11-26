import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [fontWeight, setFontWeight] = useState('normal'); // Default font weight

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontWeightChange = (e) => {
    setFontWeight(e.target.value);
  };

  const headerStyle = {
    fontSize: `${fontSize}px`,
    fontWeight: fontWeight,
    // You can add other text-related styles here
  };

  return (
    <div>
      <div className='holder'>
        <header className='header'>
          <Navbar />
          <div className='header-content flex flex-c text-center text-white' style={headerStyle}>
            <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
            <p className='header-text fs-18 fw-3'>
              Find a Book and start exploring a Story. Still Our Api is trained with Limited Number of Story We will Look it further!<br />
            </p>
            <SearchForm />
            <div>
              <form>
                <label>
                  Font Size:
                  <input
                    type="number"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                  />
                </label>
                <label>
                  Font Weight:
                  <select value={fontWeight} onChange={handleFontWeightChange}>
                    <option value="normal">Normal</option>
                    <option value="bold">Bold</option>
                    <option value="lighter">Lighter</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
