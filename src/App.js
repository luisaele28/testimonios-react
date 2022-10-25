import './App.css';
//import { Testimonio } from './componentes/Testimonio';// puedo importar de esta manera colocando llaves cuando no es por defecto
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Estos son los Testimonios de la familia Rodriguez Carrillo</h1>
      <Testimonio 
        nombre='Argenis Rodriguez'
        imagen='argenis'
        cargo='Licenciado en ciencias y artes Navales'
        testimonio='Soy apasionado a la vida militar, me encanta mantenerme en constante entrenamiento, llevar una vida saludable y mantenerme activo.'
        />
       <Testimonio
        nombre='Marcela Rodriguez'
        imagen='marcela'
        cargo='Estudiante de segundo basico'
        testimonio='Soy una niña de ocho años de edad, soy timida, me siento feliz junto a mi familia, extraño a mi familia de Venezuela y la familia que esta en Argentina, ademas me encanta mucho la pizza y el chocolate.'
       />
       <Testimonio
       nombre='Luisa Carrillo'
       imagen='luisa'
       cargo='Entrenadora Personal'
       testimonio='Soy entrenadora fisica, me encanta la vida saludable, ir a pasear al parque con mi familia, escuchar musica y ver series.'
      />
       </div>
    </div>
  );
}

export default App;

