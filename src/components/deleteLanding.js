import React from "react";
import {Link} from "react-router-dom";

export default function DeleteLanding() {


    return (
        <div className="delete-book-wrapper">
            <h1>You deleted a book</h1>
            <Link to={"/"} >View All books</Link>
        </div>
    )
}