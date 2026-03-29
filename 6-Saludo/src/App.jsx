import './App.css'
import saludo, {numeroAleatorio} from '../js/saludo';

function App() {
  
  return (
    <>
      <p>{saludo("Gaston")}</p>
      <p>El número aleatorio es: {numeroAleatorio()}</p>
    </>
  );
};

export default App;