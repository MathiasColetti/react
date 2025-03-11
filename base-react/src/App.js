import React, { Component } from "react";
import "./App.css";
import Comentario from "./components/Comentario";

class App extends Component {
  state = {
    comentarios: [
      {
        id: 1,
        name: "João",
        email: "joao@gmail.com",
        data: new Date(2025, 1, 2),
        mensagem: "Olá, tudo bem?",
      },
      {
        id: 2,
        name: "Maria",
        email: "maria@gmail.com",
        data: new Date(2025, 2, 2),
        mensagem: "Olá, tudo bem sim, e com você?",
      },
    ],
  };

  // Transformado em arrow function para manter o this correto
  adicionarComentario = () => {
    console.log("Adicionando Comentário");

    const novoComentario = {
      id: this.state.comentarios.length + 1, // Garantindo ID único
      name: "Maria",
      email: "maria@gmail.com",
      data: new Date(),
      mensagem: "Olá, pessoal!",
    };

    this.setState((prevState) => ({
      comentarios: [...prevState.comentarios, novoComentario],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map((comentario) => (
          <Comentario
            key={comentario.id}
            name={comentario.name}
            email={comentario.email}
            data={comentario.data}
          >
            {comentario.mensagem}
          </Comentario>
        ))}

        <button onClick={this.adicionarComentario}>
          Adicionar um comentário
        </button>
      </div>
    );
  }
}

export default App;
