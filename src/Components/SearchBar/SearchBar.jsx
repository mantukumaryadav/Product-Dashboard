import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchTerm, selectedCategory, selectedStatus);
  };

  return (
    <div className="container-fluid mt-3 p-2 rounded" style={{ backgroundColor: "gray" }}>
      <div className="row g-2 align-items-center">
        <div className="col-12 col-md-4">
          <label htmlFor="searchInput" className="form-label mb-1 fw-medium">What are you looking for?</label>
          <input
            id="searchInput"
            type="text"
            className="form-control"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="categorySelect" className="form-label mb-1 fw-medium">Category</label>
          <select
            id="categorySelect"
            className="form-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="statusSelect" className="form-label mb-1 fw-medium">Status</label>
          <select
            id="statusSelect"
            className="form-select"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="">Status</option>
            <option value="status1">Status 1</option>
            <option value="status2">Status 2</option>
            <option value="status3">Status 3</option>
          </select>
        </div>
        <div className="col-12 col-md-2 mt-3 ">
          <button className="btn btn-primary w-100 mt-3 " onClick={handleSearchClick}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
