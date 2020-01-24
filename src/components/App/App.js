import React from 'react';

import FavoritesList from '../FavoritesList/FavoritesList';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
    render () {
        return (
           <div className="ui container" style={{ marginTop: '10px' }}>
               <Header title="Add To Favorites"/>

               <div className="ui segment">

                   <SearchBar/>
                   <div className="column eight wide">
                       <SearchResults/>
                   </div>
               </div>


               <div className="column eight wide">
                   <FavoritesList/>
               </div>
           </div>
        );
    }
}

export default App;
