import React from 'react';

import Header from '../Panel/Header';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
    render () {
        return (
           <div className="ui container" style={{ marginTop: '10px' }}>
               <Header title="Search Teams"/>
               <SearchBar/>
           </div>
        );
    }
}

export default App;
