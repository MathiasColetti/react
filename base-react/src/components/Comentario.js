const Comentario = (props) => {
  // Verifique se props.data está definido antes de tentar chamar toString
//   const dataString = props.data ? props.data.toString() : "Data não fornecida";

  return (
    <div className="Comentario">
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.children}</p>
      <p>{props.data.toString()}</p>
      {/* Exibindo a data convertida ou mensagem padrão */}
    </div>
  );
};

export default Comentario;
