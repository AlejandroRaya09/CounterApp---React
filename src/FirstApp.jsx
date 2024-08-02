/*
export function App() {

    return <h1>Hola Mundo</h1>;
    
  } 
*/

const newMessage = {
    message: 'Hola Mundo',
    tittle: 'Alejandro'
};

const getResult = (a,b) =>{
    return a+b;
}



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


