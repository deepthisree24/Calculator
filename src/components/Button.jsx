function Button({ value, click }) {

  return (
    <button onClick={() => click(value)}>
      {value}
    </button>
  );

}

export default Button;