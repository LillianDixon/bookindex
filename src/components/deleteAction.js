import React from "react";
import {Link} from "react-router-dom";

export default function DeleteAction(props) {

    function bookDelete(){
        fetch (`https://ld-book-api-practice.herokuapp.com/delete/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => {return response.json()})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    };

    return (
        <div>
            <Link onClick={bookDelete} to={"/deleted_book"} >Delete</Link>
        </div>
    )
}