import './App.scss';
import 'skeleton-css/css/skeleton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Account from './components/account/Account';
import Entry from './components/entry/Entry';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div class="container-main">
      <div class="container-content">
        {/* Section headers start */}
        <div class="row border">
          <div class="one-half column border-right mg-l">
            <div class="box-title pd-l pd-t">
              <h2 >Kassenbuch</h2>
              {/* TO DO: Implement display current Date  */}
            </div>
          </div>
          <div class="one-half column mg-l pd-r">
            <div class="box-accounts pd-l pd-t">
              <h4 >Konten</h4>
              {/* TO DO: Implement display account name, amount --> */}
              <div class="accounts-boxes">
                <Account />
                <Account />
              </div>
            </div>
          </div>
        </div>
        {/* Section Headers ends */}

        <div class="row border mg-t">
          <div class="two-thirds column border-right max-height">
            {/* Section new entry, filter and search starts */}
            {/* TO DO: Implement new entry, filter and search --> */}
            <div class="box-entry-menu-bar pd-l pd-t">
              <h5>Ausgaben / Einkommen </h5>
              <button class="button-primary"> <i class="bi bi-plus-square"></i> Neuer Eintrag</button>
              <button class="button-primary"> <i class="bi bi-funnel"></i> Filter</button>
              <input type="text" name="name" placeholder="suchen" id="searchInput" />
            </div>
              {/* Section new entry, filter and search ends */}
            
            {/* Section Table content starts */}
            <div class="table-column">
              <table class="u-full-width">
                <thead>
                  <tr>
                    <th>Nr.</th>
                    <th>Datum</th>
                    <th>TYP</th>
                    <th>KOMMENTAR</th>
                    <th>BETRAG</th>
                    <th>KONTO</th>
                    <th>KATEGORIE</th>
                  </tr>
                </thead>
                {/* TO DO: Implement display new entry, edit and delete --> */}
                <tbody>
                  <Entry />
                </tbody>
              </table>
              </div>
          </div>
          {/* Section Table content ends */}
          
          {/* Section Pichart overview starts */}
          {/* TO DO: Implement month and year selection, display pie charts, display amounts of expenses and incomes, total, etc.  --> */}
          <div class="one-third column mg-l max-height">
            <div class="box-overview pd-l pd-t">
              <h4>Übersicht</h4>
              <h5>Ausgaben / Einkommen</h5>
              {/* TO DO: month selection, display pie charts, etc.. */ }
            </div>
          </div>
          {/* Section Pichart overview ends */}
        </div>

      </div>
    </div>
  );
}

export default App;
