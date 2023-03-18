import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SimpleFetching = () => {
    const [user, setUser] = useState([]);
    const apifetching = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }
    useEffect(() => {
        apifetching();
    }, [])
    return (
        <div style={{ marginTop: "50px" }}>
            {user.map((Obj) => (
                <li>
                    <ol>{Obj.name}</ol>
                    <ol>{Obj.username}</ol>
                    <ol>{Obj.phone}</ol>
                    <ol>{Obj.email}</ol>
                    <ol>{Obj.website}</ol>
                </li>
            ))}
            <Link to="/axiosfetching">
                <div>
                    <button className='ui button blue'>axios api</button>
                </div>
            </Link>
        </div>
    );
}

export default SimpleFetching;