import React from 'react';
import './TableSearchBar.scss';

const TableSearchBar = () => {
  return (
    <div className="table-menu-bar">
      <h5>Ausgaben / Einkommen </h5>
      <button className="button-primary">
        {" "}
        <i className="bi bi-plus-square"></i> Neuer Eintrag
      </button>
      <button className="button-primary">
        {" "}
        <i className="bi bi-funnel"></i> Filter
      </button>
      <input type="text" name="name" placeholder="suchen" id="searchInput" />
  </div>
  )
}

export default TableSearchBar;
