import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PencilSquare } from "react-bootstrap-icons";

const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li className={`page-item ${currentPage === i ? 'active' : ''}`} key={i}>
          <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="rounded mt-3" style={{ backgroundColor: "gray" }}>
      <div className="d-flex justify-content-between mb-3 p-1 ">
        <div className="d-flex align-items-center">
          <h1>Product Summary</h1>
        </div>
        <div className="d-flex align-items-center flex-column flex-md-row">
          <div className="d-flex align-items-center mb-2 mb-md-0 me-md-3">
            <label htmlFor="show" className="me-2 fw-medium">
              Show
            </label>
            <select className="form-select" aria-label="Show">
              <option>All Columns</option>
            </select>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-2">Dispatch </button>
            {/* pagination here */}
            <nav>
              <ul className="pagination mb-0">
                <li className="page-item">
                  <button className="page-link" onClick={() => handlePageChange(Math.max(1, currentPage - 1))}>&lt;</button>
                </li>
                {renderPageNumbers()}
                <li className="page-item">
                  <button className="page-link" onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}>&gt;</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Country</th>
              <th>Shipping</th>
              <th>Source</th>
              <th>Order Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.source}</td>
                <td>{item.orderType}</td>
                <td>
                  <PencilSquare />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
