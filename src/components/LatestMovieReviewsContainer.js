import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(`${URL}`)
            .then(res => res.json())
            .then(data => this.setState({
                reviews: data.results
            }))
    }


    
    render() {
        const { reviews } = this.state
        return(
            <div className='latest-movie-reviews'>
                {reviews.map(review => <MovieReviews key={review.id} review={review} />)}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
