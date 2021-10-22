import React from 'react';
import './TableSearchBar.scss';

const TableSearchBar = () => {
  return (
    <div class="table-menu-bar">
      <h5>Ausgaben / Einkommen </h5>
      <button class="button-primary">
        {" "}
        <i class="bi bi-plus-square"></i> Neuer Eintrag
      </button>
      <button class="button-primary">
        {" "}
        <i class="bi bi-funnel"></i> Filter
      </button>
      <input type="text" name="name" placeholder="suchen" id="searchInput" />
  </div>
  )
}

export default TableSearchBar;
