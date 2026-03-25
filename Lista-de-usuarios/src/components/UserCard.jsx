import React from "react";

function UserCard({name, lastName, email, avatar, profession }) {
    return (
        <div className="user-card">
            <div className="avatar">
               <img src={avatar} alt={`${name} ${lastName}`} className="user-avatar" width={150} height={150}/>
            </div>
            <div className="details">
               <h2>{name} {lastName}</h2>
               <p>Email: {email}</p>
               <p>Profession: {profession}</p>
            </div>
        </div>
    )
}

export default UserCard;