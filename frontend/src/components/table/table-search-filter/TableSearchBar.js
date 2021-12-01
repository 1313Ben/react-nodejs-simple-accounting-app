import React from 'react';
import './TableSearchBar.scss';
import NewEntryForm from '../../form/NewEntryForm';
import { useState } from 'react';

const TableSearchBar = () => {

  const [popupNewEntry, setPopupNewEntry] = useState(false);

  return (
    <div class="table-menu-bar">
      <h5>Ausgaben / Einkommen </h5>
      <button class="button-primary" onClick={ () => setPopupNewEntry(true)}>
        <i class="bi bi-plus-square"></i> Neuer Eintrag
      </button>
      <button class="button-primary">
        {" "}
        <i class="bi bi-funnel"></i> Filter
      </button>
      <input type="text" name="name" placeholder="suchen" id="searchInput" />

      <NewEntryForm triggerDisplayForm={popupNewEntry} setTriggerDisplayForm={setPopupNewEntry} />
  </div>
  )
}

export default TableSearchBar;
