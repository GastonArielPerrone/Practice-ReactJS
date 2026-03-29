import './App.css'
import Header from './components/Header';
import Main from './components/Main';

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
    <Main users={users} />
  </>
  );
}

export default App
