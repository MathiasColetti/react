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
    novoComentario: {
      nome: "",
      email: "",
      mensagem: "",
    },
  };

  // Transformado em arrow function para manter o this correto
  adicionarComentario = (event) => {
    event.preventDefault();
    const novoComentario = {
      id: this.state.comentarios.length + 1, // Gerando um ID único
      name: this.state.novoComentario.nome, // Padronizando para "name"
      email: this.state.novoComentario.email,
      data: new Date(),
      mensagem: this.state.novoComentario.mensagem,
    };

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: "", email: "", mensagem: "" },
    });
  };

  digitacao = (evento) => {
    let value = evento.target.value;
    let name = evento.target.name;
    this.setState({
      novoComentario: { ...this.state.novoComentario, [name]: value },
    });
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

        {/* <button onClick={this.adicionarComentario}>
          Adicionar um comentário
        </button> */}

        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentario</h2>
          <div>
            <input
              type="text"
              name="nome"
              value={this.state.novoComentario.nome}
              placeholder="Digite Seu nome"
              // onChange={this.digitacaoDoNome}
              onChange={this.digitacao}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.novoComentario.email}
              // onChange={this.digitacaoDoEmail}
              placeholder="Digite Seu E-mail"
              onChange={this.digitacao}
            />
          </div>
          <div>
            <input
              type="text"
              name="mensagem"
              value={this.state.novoComentario.mensagem}
              // onChange={this.digitacaoDaMensagem}
              placeholder="Digite Seu nome"
              onChange={this.digitacao}
            />
          </div>
          <div>
            <textarea name="mensagem" rows="4"></textarea>
          </div>
          <button type="submit">Adicionar Comentario</button>
        </form>
      </div>
    );
  }
}

export default App;
