import "./MS1_Item.css";

function MS1_Item({ src, headText, contentText }) {
  return (
    <div className="MS1_Item">
      <img src={src} />
      <h3>{headText}</h3>
      <p>{contentText}</p>
    </div>
  );
}

export default MS1_Item;
