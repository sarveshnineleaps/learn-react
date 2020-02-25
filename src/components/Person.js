import React from 'react';

function Person({person}) {

    return (
        <div>
            <h1>Your details</h1>
            <p> First Name : {person.firstName}</p>
            <p> Last Name : {person.lastName}</p>
            <p> Phone NUmber : {person.phoneNumber}</p>
            <p> Email Id : {person.emailId}</p>
        </div>
    )
}

export default Person;
