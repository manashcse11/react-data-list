import React, {Component} from 'react';

class DataList extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
            , isLoaded: false
            , movies: []
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=cd890f94a756b1518a2a17617a5b430e&page=1")
        .then(response => response.json())
        .then(result => {
            this.setState({
                isLoaded: true
                , movies: result.results
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
        const {error, isLoaded, movies} = this.state;

        if(error){
            return (<div>Error in loading</div>);
        }
        else if (!isLoaded){
            return (<div>Loading...</div>);
        }
        else{
            return(
                <table id="example" className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Vote average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(movie => 
                                <tr key={movie.id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.vote_average}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            );
        }
    }
}

export default DataList;