import React, {Component} from 'react';
import DataList from './components/list/DataList';

class App extends Component {
    render (){
        return(
            <div className="container">
                <h1>React Data Table</h1>
                <DataList />
            </div>            
        );
    }
}

export default App;
