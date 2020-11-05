import React from 'react'

const MovieReviews = ( { review } ) => {
    
    return(
        <div className='review-list'>
            <ul className='review'>
                <li><h3>{review.display_title}</h3></li>
                <li><img typeof={review.multimedia.type} src={review.multimedia.src} alt='broken'></img></li>
                <li>MPAA Rating: {review.mpaa_rating}</li>
                <li>Critics Pick: {review.critics_pick}</li>
                <li>Opening Date: {review.opening_date ? review.opening_date : "This movie is still in production and has not set an opening date."}</li>
                <li><h4>{review.headline}</h4></li>
                <li>Review Published: {review.publication_date}</li>
                <li>Critic: {review.byline}</li>
                <li>{console.log(review)}</li>
                <li>{review.summary_short}</li>
                <li><a href={review.link.url}>{review.link.suggested_link_text}</a></li>
            </ul> 
        </div>
    )
}

export default MovieReviews