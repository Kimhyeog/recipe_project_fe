import "./Main_Section1.css";
import MS1_Item from "./MS1_Item";

const section1ContentsList = [
  {
    id: 1,
    src: "src/assets/section1_recipe.jpg",
    headText: "훌륭한 요리사, 훌륭한 조리법",
    contentText: "다른 사람들의 조리법을 따라 맛있는 요리를 만들어 보아요.",
  },
  {
    id: 2,
    src: "src/assets/section1_shopping.jpg",
    headText: "좋은 도구에서, 좋은 요리가",
    contentText: "좋은 도구를 공동구매를 통해 싸게 구매해보아요.",
  },
  {
    id: 3,
    src: "src/assets/section1_community.jpg",
    headText: "나의 요리 어때?, 나의 주방 어때?",
    contentText:
      "당신의 요리, 조리 도구, 주방 등의 여러가지를 다른사람과 공유해보아요.",
  },
];

function Main_Section1() {
  return (
    <div className="Main_Section1">
      {section1ContentsList.map((list) => {
        return (
          <MS1_Item
            key={list.id}
            src={list.src}
            headText={list.headText}
            contentText={list.contentText}
          />
        );
      })}
    </div>
  );
}

export default Main_Section1;
