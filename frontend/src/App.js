import './App.scss';
import 'skeleton-css/css/skeleton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Account from './components/account/Account';
import NewEntry from './components/new_entry/NewEntry';

function App() {
  return (
    <div class="container-main">
      <div class="container-content">
        {/* Section headers start */}
        <div class="row border">
          <div class="one-half column border-right mg-l">
            <div class="header-fix-height pd-l pd-t">
              <h2 >Mein Kassenbuch</h2>
              {/* TO DO: Implement display current Date  */}
            </div>
          </div>
          <div class="one-half column  mg-l pd-r">
            <div class="header-fix-height pd-l pd-t">
              <h4 >Konten</h4>
              {/* TO DO: Implement display account name, amount --> */}
              <div class="account">
                <Account />
                <Account />
              </div>
            </div>
          </div>
        </div>
        {/* Section Headers ends */}

        <div class="row border mg-t">
          <div class="two-thirds column border-right mg-l max-height">
            {/* Section new entry, filter and search starts */}
             {/* TO DO: Implement new entry, filter and search --> */}
            <div class="entry-header">
              <h5>Ausgaben / Einkommen </h5> <button class="button-primary"> <i class="bi bi-plus-square"></i> Neuer Eintrag</button>
              <button class="button-primary"> <i class="bi bi-funnel"></i> Filter</button>
              <input type="text" name="name"  placeholder="suchen" id="searchInput" />
            </div>
             {/* Section new entry, filter and search ends */}
            
            {/* Section Table content starts */}
            <div class="table-column">
              <table class="u-full-width">
                <thead>
                  <tr>
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
                  <NewEntry />
                </tbody>
              </table>
            </div>
          </div>
          {/* Section Table content ends */}
          
          {/* Section Pichart overview starts */}
          {/* TO DO: Implement month and year selection, display pie charts, display amounts of expenses and incomes, total, etc.  --> */}
          <div class="one-third column mg-l max-height">
            <div class="pd-l overview-column">
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
