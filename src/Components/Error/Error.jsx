import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Error/Error.module.css';

const Error = () => {
    return (
        <div className={style.divContainer}>
            <h1 className={style.title}>Sorry, Page Not Found</h1>
            <Link to="/"><button className={style.btn}>Click here to go back</button></Link>
        </div>
    )
}
export default Error; 