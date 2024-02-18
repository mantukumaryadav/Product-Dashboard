import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Table from '../Table/Table';
import data from '../../Data';

const Home = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    searchTerm: '',
    category: '',
    status: '',
    customer: '',
    email: '',
    country: '',
    shipping: '',
    source: '',
    orderType: ''
  });

  const handleSearch = (searchTerm, category, status) => {
    setSearchCriteria({
      ...searchCriteria,
      searchTerm: searchTerm,
      category: category,
      status: status
    });
  };

  console.log('Search Criteria:', searchCriteria);

  const filteredData = data.filter(item => {
    const matchSearchTerm = Object.entries(item).some(([key, value]) => {
      if (key === 'id') {
        console.log('ID:', value);
        return String(value) === searchCriteria.searchTerm;
      }
      if (typeof value === 'string' || typeof value === 'number') {
        return value.toString().toLowerCase().includes(searchCriteria.searchTerm.toLowerCase());
      }
      return false;
    });

    return (
      matchSearchTerm &&
      (searchCriteria.category === '' || item.category === searchCriteria.category) &&
      (searchCriteria.status === '' || item.status === searchCriteria.status) &&
      (searchCriteria.customer === '' || item.customer === searchCriteria.customer) &&
      (searchCriteria.email === '' || item.email === searchCriteria.email) &&
      (searchCriteria.country === '' || item.country === searchCriteria.country) &&
      (searchCriteria.shipping === '' || item.shipping === searchCriteria.shipping) &&
      (searchCriteria.source === '' || item.source === searchCriteria.source) &&
      (searchCriteria.orderType === '' || item.orderType === searchCriteria.orderType)
    );
  });

  console.log('Filtered Data:', filteredData);

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <Table data={filteredData} />
    </div>
  );
};

export default Home;
