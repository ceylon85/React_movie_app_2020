import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
    {
        id: 1,
        name: "kimchi",
        image: "https://img1.daumcdn.net/thumb/R720x0/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fliveb" +
                "oard%2Frealfood%2F242c32cb349f4a7fbd23a024f6d85cbe.jpg",
        rating: 5.0
    }, {
        id: 2,
        name: "samgyeopsal",
        image: "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Flive" +
                "board%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG",
        rating: 5.0
    }, {
        id: 3,
        name: "hamburger",
        image: "https://dimg.donga.com/wps/NEWS/IMAGE/2019/05/20/95598609.1.jpg",
        rating: 4.8
    }, {
        id: 4,
        name: "pizza",
        image: "https://file.namu.moe/file/f05a7b34563529b1226172c2339c545bf3b6699c7674c3bc4395e" +
                "41dc5623e79",
        rating: 4.6
    }, {
        id: 5,
        name: "chickhen",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_" +
                "fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg",
        rating: 4.8
    }
]
function Food(dish) {
    return (
        <div>
            <h2 >
                I like {dish.name}
            </h2>
            <h4>{dish.rating}/5.0</h4>
            <img src={dish.picture} alt={dish.name}></img>
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function App() {
    return (
        <div>
            {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
        </div>
    );
}

export default App;
