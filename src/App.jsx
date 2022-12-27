
import React from 'react';
//import { PortfolioContainer } from './portfolio-container/PortfolioContainer'
import { PortfolioContainer} from './portfolioContainer/PortfolioContainer'
import { LoaderBar } from './utilities/commonUtils'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
     <ToastContainer />
      <LoaderBar />
      <PortfolioContainer />
    </div>
  );
}

export default App;
