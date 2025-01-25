import { useState } from "react";
import Button from "./Button";
import "./Instructor.css";

const contentList = [
  {
    type: "OurRecipe",
    backSrc: "src/assets/cooking-img.jpg",
    pText: "오늘의 레시피",
    h2Text: "오늘 쳐먹고 싶은 요리 레시피를 찾아볼까요?",
  },
];

function Instructor({ type }) {
  const [headerType, setHeaderType] = useState(contentList[0]);
  const getItemByType = (type) => {
    contentList.map((item) => {
      if (item.type === type) {
        setHeaderType(item);
      }
    });
  };

  return (
    <div className={`Instructor_${headerType.type}`}>
      <img src={headerType.backSrc} />
      <div className="Instructor-Contents">
        <h2>{headerType.pText}</h2>
        <h1>{headerType.h2Text}</h1>
        <Button text={"시발"} />
      </div>
    </div>
  );
}

export default Instructor;
