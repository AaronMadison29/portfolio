import React, {useState} from 'react';
import './App.css';
import SideBar from './components/SideBar.js';
import ContentArea from './components/ContentArea.js';

function App() {
  
  const [currentPage = 0, setCurrentPage] = useState();

  function navigation(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="row background">
      <SideBar
          currentPage={currentPage}
          navigation={navigation}
        />
      <ContentArea
      currentPage={currentPage}
      navigation={navigation}
      />
    </div>
  );
}


export default App;