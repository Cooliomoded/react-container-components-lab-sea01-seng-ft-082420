import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: null
    }
    
    componentDidMount() {
        fetch(`${URL}`)
            .then(res => res.json())
            .then(data => this.setState({
                reviews: data.results
            }))
    }
    
    render() {
        const { reviews, searchTerm } = this.state
        return(
            <div className='searchable-movie-reviews'>
                {reviews.map(review => <MovieReviews review={review} />)}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
