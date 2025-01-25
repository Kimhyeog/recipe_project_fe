import "./Button.css";

function Button({ text, type = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`Button${type === "" ? type : "_" + type}`}
    >
      {text}
    </button>
  );
}

export default Button;
