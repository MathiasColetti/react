import logo from "./logo.svg";
import "./App.css";
import Comentario from "./components/Comentario";
import { Component } from "react";

class App extends Component {
  state = {
    comentarios: [
      {
        id: 1,
        name: "joao",
        email: "joao@gmail.com",
        data: new Date(2025, 1, 2),
        mensagem: " Ola Tudo bem?",
      },
      {
        id: 2,
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

        {this.state.comentarios.map((comentario, indice) => {
          return (
            <Comentario
              key={comentario.id}
              name={comentario.name}
              email={comentario.email}
              data={comentario.data}
            >
              {comentario.mensagem}
            </Comentario>
          );
        })}
      </div>
    );
  }
}

export default App;
