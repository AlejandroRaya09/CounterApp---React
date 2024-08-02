/*
export function App() {

    return <h1>Hola Mundo</h1>;
    
  } 
*/
import PropTypes from 'prop-types'

const newMessage = {
  message: "Hola Mundo",
  tittle: "Alejandro",
};

const getResult = (a, b) => {
  return a + b;
};

export const FirstApp = ({ title = "Titulo Default", subtitulo}) => {

    if(!title){
        throw new Error("El title no existe")
    }

  return (
    <>
      <h1>{ title }</h1>
      <p>Soy un Subtitulo... { subtitulo } </p>
    </>
  );
};


FirstApp.propTypes = {
title: PropTypes.string.isRequired,
subtitulo: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay Titulo',
    subtitulo: 'No hay Subtitulo'
}


/*
export const HelloWordApp = () => {

  return (
    //FRAGMENT
    <>
    <h1>{newMessage.tittle}</h1>
    <code>{JSON.stringify(newMessage)}</code>

    <p>{getResult(8,6)} Soy una funcion</p>
    <p>Hola Soy Un Parrafo</p>
    </>
  );
};
*/
