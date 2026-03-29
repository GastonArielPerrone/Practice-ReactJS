import React from "react";
import UserCard from "./UserCard";
import "./Main.css";

function Main(){
    const users = [{
    id: 1,
    name: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    avatar: "./public/avatar.png",
    profession: "Software Engineer"
  },
  {
    id: 2,
    name: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    avatar: "./public/avatar_woman.png",
    profession: "Product Manager"
  },
  {
    id: 3,
    name: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    avatar: "./public/avatar_man2.png",
    profession: "Sales Associate"
  }
];

    return (
        <main>
            <h2>Credentials lists</h2>
            <div className="credentials__container">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    lastName={user.lastName}
                    email={user.email}
                    avatar={user.avatar}
                    profession={user.profession}
                />
            ))}
            </div>
        </main>
    )
}

export default Main;