import './App.css'
import UserCard from './components/UserCard';
import Header from './components/Header';

function App() {

  const users = [{
    name: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    avatar: "./public/avatar.png",
    profession: "Software Engineer"
  },
  {
    name: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    avatar: "./public/avatar_woman.png",
    profession: "Product Manager"
  },
  {
    name: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    avatar: "./public/avatar_man2.png",
    profession: "Sales Associate"
  }
];

  return (
    <>
    <Header />
    <div className="cards-container">
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          lastName={user.lastName}
          email={user.email}
          avatar={user.avatar}
          profession={user.profession}
        />
      ))}
    </div>
  </>
  );
}

export default App
