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
    <div class="container-main">
      <div class="container-content">
        <div class="row border">
          <div class="one-half column border-right mg-l">
            <LeftHeader />
           </div>  
          <div class="one-half column mg-l pd-r bg-secondary">
            <RightHeader />
          </div>
        </div>

        <div class="row border mg-t">
          <div class="two-thirds column border-right max-height">
            <MainContentLeft />
          </div>
          <div class="one-third column mg-l max-height">
            <MainContentRight />
          </div>        
        </div>
      </div>
    </div>
  );
}

export default App;
