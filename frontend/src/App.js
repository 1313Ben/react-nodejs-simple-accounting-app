import './App.scss';
import 'skeleton-css/css/skeleton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LeftHeader from './components/layout/LeftHeader';
import RightHeader from './components/layout/RightHeader';
import MainContentLeft from './components/layout/MainContentLeft';
import MainContentRight from './components/layout/MainContentRight';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="container-main">
      <div className="container-content">
        <div className="row border">
          <div className="one-half column border-right mg-l">
            <LeftHeader />
           </div>  
          <div className="one-half column mg-l pd-r bg-secondary">
            <RightHeader />
          </div>
        </div>

        <div className="maincontent row border mg-t">
          <div className="two-thirds column">
            <MainContentLeft />
          </div>
          <div className="one-third column mg-l">
            <MainContentRight />
          </div>        
        </div>
      </div>
    </div>
  );
}

export default App;
