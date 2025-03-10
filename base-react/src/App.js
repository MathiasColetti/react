import logo from "./logo.svg";
import "./App.css";
import Comentario from "./components/Comentario";
import { Component } from "react";

class App extends Component {
  state = {
    comentarios: [
      {
        name: "joao",
        email: "joao@gmail.com",
        data: new Date(2025, 1, 2),
        mensagem: " Ola Tudo bem?",
      },
      {
        name: "Maria",
        email: "maria@gmail.com",
        data: new Date(2025, 2, 2),
        mensagem: " Ola Tudo bem sim, e com voce?",
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map((comentario) => {
          console.log(comentario);
        })}
        <Comentario
          name="Joao"
          email="joao@gmail.com"
          data={new Date(2025, 1, 2)}
        ></Comentario>
        <Comentario
          name="Maria"
          email="maria@gmail.com"
          data={new Date(2025, 2, 2)}
        >
          Ola Tudo bem sim, e com voce?
        </Comentario>
      </div>
    );
  }
}

export default App;

// import React from "react";
// import "./App.css";
// import Comentario from "./components/Comentario";

// function App() {
//   return (
//     <div className="App">
//       <h1>Meu Projeto</h1>
//       {/* Passando um objeto Date para props.data */}
//       <Comentario
//         name="João"
//         email="joao@gmail.com"
//         data={new Date(2025, 1, 2)} // Certifique-se de passar o valor de data corretamente
//       />
//       <Comentario />
//       {/* Outro Comentario com data */}
//       <Comentario
//         name="Maria"
//         email="maria@gmail.com"
//         data={new Date(2025, 2, 2)} // Também passando o objeto Date
//       >
//         Olá, tudo bem sim, e com você?
//       </Comentario>
//     </div>
//   );
// }

// export default App;
