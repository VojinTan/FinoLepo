import React from 'react';
import { Link } from 'react-router-dom';


export const Menu = () => {

    return(
        <div className = "Meni">
            <ul>
                <li><Link to={'/opticki-leki'}>Оптички леќи</Link></li>
                <li><Link to={'/opticki-leki'}>Оптички леќи</Link></li>
                <li>Оптички леќи</li>
            </ul>
            <p>akjflksjdfghjdfghjdfghlkdjfh</p>
        </div>
    )
}

export default Menu;
