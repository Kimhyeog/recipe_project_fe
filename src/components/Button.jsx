import "./Button.css";

function Button({ text, type = "" }) {
  return (
    <button className={`Button${type === "" ? type : "_" + type}`}>
      {text}
    </button>
  );
}

export default Button;
