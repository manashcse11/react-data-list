import React from 'react';

const Table = (props) => {
    const movies = props.movies;
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

export default Table;