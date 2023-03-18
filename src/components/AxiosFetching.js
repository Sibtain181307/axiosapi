import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const AxiosFetching = () => {
    const [user, setUser] = useState([]);
    const fetchapi = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res);
                setUser(res.data);
            }).catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchapi();
    }, [])
    return (
        <div>
            {user.map((Obj) => (
                <li>
                    <ol>{Obj.body}</ol>
                    <ol>{Obj.title}</ol>
                </li>
            ))}
            <Link to="/">

                <div style={{ marginTop: "25px" }}>
                    <button className='ui button blue'>simple fetching</button>
                </div>

            </Link>
        </div>
    )
}

export default AxiosFetching;