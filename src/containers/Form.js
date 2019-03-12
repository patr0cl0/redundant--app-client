import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');

  return (
    <form onSubmit={onSubmit(text)}>
      <div className="form-group mt-1">
        <input
          className="form-control"
          placeholder="Hello world"
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
        <small className="form-text text-muted">Ingresa el text que se enviará al api!</small>
      </div>

      <button
        type="submit"
        className="btn btn-secondary"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
