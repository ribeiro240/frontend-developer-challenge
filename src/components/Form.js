import React from 'react';

const Form = () => {
  return (
    <form className="share-form" id="form">
      <h3 className="form-heading">Compartilhe a novidade</h3>
      <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      <div className="user-info">
        <div className="name">
          <label htmlFor="name">
            Nome do seu amigo:
							</label>
          <input type="text" id="name"></input>
        </div>
        <div>
          <label htmlFor="email">
            E-mail:
							</label>
          <input type="email" id="email"></input>
        </div>

      </div>
      <button className="send-now">Enviar agora</button>
    </form>
  );
}

export default Form;