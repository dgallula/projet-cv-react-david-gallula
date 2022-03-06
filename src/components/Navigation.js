import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='idcontent'>
                <img src="./media/photo.jpg" alt="profil-pic" />
                 <h3>David Gallula</h3>
            </div> 
            <div className='navigation'>
                <ul>
                    <NavLink exact to ='/' activClassename= 'navactive'>
                        <i className='fas fa-Home'></i>
                        <span>Accueil</span>
                   </NavLink>
                </ul>
           </div>     
        </div>

        
    );
};

export default Navigation;