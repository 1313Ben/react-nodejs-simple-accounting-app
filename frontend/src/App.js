import './App.scss';
import 'skeleton-css/css/skeleton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Account from './components/account/Account';
import Entry from './components/entry/Entry';
import LeftHeader from './components/layout/LeftHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import TableContent from './components/table/tablecontent/TableContent';
import TableSearchBar from './components/table/table-search-filter/TableSearchBar';
import MainContent
 from './components/maincontent/MainContent';
function App() {
  return (
    <div class="container-main">
      <div class="container-content">
        {/* Section headers start */}
        <div class="row border">
          <LeftHeader/>       
          <div class="one-half column mg-l pd-r bg-secondary">
            <div class="box-accounts pd-l pd-t">
              <h4 >Konnten</h4>             
              <div class="accounts-boxes">
                <Account title="Migros Bank" amount="1000.00" />
                <Account title="Raiffeisen" amount="1000.00" />
                <Account title="Neon" amount="500.00" />
              </div>
            </div>
          </div>
        </div>
    
        <MainContent>
          <div class="two-thirds column border-right max-height">
              <TableSearchBar/>            
              <TableContent/>
          </div>
                  
          {/* Section Piechart overview starts */}
          {/* TO DO: Implement month and year selection, display pie charts, display amounts of expenses and incomes, total, etc.  --> */}
          <div class="one-third column mg-l max-height">
            <div class="box-overview pd-l pd-t">
              <h4>Übersicht</h4>
              <h5>Ausgaben / Einkommen</h5>
              {/* TO DO: month selection, display pie charts, etc.. */ }
            </div>
          </div>
        
        </MainContent>

      </div>
    </div>
  );
}

export default App;
