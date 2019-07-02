import React, {Component} from 'react';

class DataList extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
            , isLoaded: false
            , users: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(result => {
            this.setState({
                isLoaded: true
                , users: result
            });
            },
            error => {
                this.setState({
                    isLoaded: true
                    , error
                });
            }
        );
    }

    render(){
        const {error, isLoaded, users} = this.state;

        if(error){
            return (<div>Error in loading</div>);
        }
        else if (!isLoaded){
            return (<div>Loading...</div>);
        }
        else{
            return(
                <div>
                    <ol>
                        {
                            users.map(user => (
                                <li key={user.id} align="start">
                                    <div>
                                        <p>{user.title}</p>
                                        <p>{user.body}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            );
        }
    }
}

export default DataList;