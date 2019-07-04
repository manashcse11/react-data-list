import React, {Component} from 'react';
import Table from './Table';
import Pagination from '../pagination/Pagination';

class DataList extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
            , isLoaded: false
            , movies: []
            , page: 1
            , total_pages: 0
        }
    }

    componentDidMount(){
        this.makeHttpRequestWithPage(1);
    }

    makeHttpRequestWithPage = (pageNumber) => {
        this.setState(
            {
                page: pageNumber
            }
        );
        let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cd890f94a756b1518a2a17617a5b430e&page="+pageNumber;
        fetch(url)
        .then(response => response.json())
        .then(result => {
            this.setState({
                isLoaded: true
                , movies: result.results
                , total_pages: result.total_pages
            });
            },
            error => {
                this.setState({
                    isLoaded: true
                    , error
                });
            }
        );
        // console.log(pageNumber);
    }

    render(){
        const {error, isLoaded, movies, page, total_pages} = this.state;

        if(error){
            return (<div>Error in loading</div>);
        }
        else if (!isLoaded){
            return (<div>Loading...</div>);
        }
        else{
            return(
                <div>
                    <Table movies = {movies} />
                    <Pagination page = {page} total_pages = {total_pages} paginationHandler = {this.makeHttpRequestWithPage}/>
                </div>
            );
        }
    }
}

export default DataList;