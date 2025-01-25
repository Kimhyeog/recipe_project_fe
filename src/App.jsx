import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { createContext, useReducer, useRef } from "react";

const memberMockData = [
  {
    id: 1,
    user_name: "LeeHunmin",
    user_ID: "leehun",
    user_BirthDate: new Date("2001-01-01"),
    user_password: "12345",
    createAt: new Date(),
    updateAt: new Date(),
  },
];

function memberReducer(member, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...member];
  }
  return member;
}
export const MemberStateContext = createContext();

function App() {
  const [member, dispatch] = useReducer(memberReducer, memberMockData);
  const idRef = useRef(memberMockData.length);

  const onCreateMember = (memberInfo) => {
    dispatch({
      type: "CREATE",
      data: memberInfo,
    });
  };

  return (
    <MemberStateContext.Provider value={member}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </MemberStateContext.Provider>
  );
}

export default App;
