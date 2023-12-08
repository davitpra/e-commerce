"use client"
import {createContext, useEffect, useState} from "react";

export const ReviewContext = createContext({});

export function ReviewContext({children}) {
    const [reviews,setReviews] = useState([]);

    // define localStorage
    const ls = typeof window !== "undefined" ? window.localStorage : null;

    // save reviews to localStorage
    useEffect(() => {
        if (reviews?.length > 0) {
        ls?.setItem('reviews', JSON.stringify(reviews));
        }
    }, [reviews]);

    // get reviews from localStorage
    useEffect(() => {
        if (ls && ls.getItem('reviews')) {
        setReviews(JSON.parse(ls.getItem('reviews')));
        }
    }, []);

    // add product to cart
    function addReviews (productId, review) {
        // new review object
        let newReview = {
        _id: productId,
        review: review
        }
        // add product to cart
        setReviews(prev => [...prev,newReview]);
    }
  
    function removeReview(productId) {

        const pos = reviews.indexOf(review => review._id === productId);

        if (pos !== -1) {
          setReviews(prev => {
            return prev.filter(review => review._id !== pos);
          });
        }
      }


    return (
        <ReviewContext.Provider value={{reviews, setReviews, addReviews, removeReview}}>
            {children}
        </ReviewContext.Provider>
    )
}
