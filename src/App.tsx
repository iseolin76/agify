import React from "react";
import getAge from "./api";
import "./App.css";

const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  if (!e.currentTarget.fullName.value) {
    alert("이름을 입력해주세요.");
    return;
  }
  getAge(e.currentTarget.fullName.value).then((age) => {
    const result = age.age === null ? Math.floor(Math.random() * 101) : age.age;
    alert("당신의 예상 나이는 " + result + " 세 입니다.");
  });
  e.currentTarget.reset();
};

function App() {
  return (
    <div className="App">
      <form onSubmit={onSubmit} className="App-contents">
        <h1 className="title">나이 측정기</h1>
        <input
          className="name-input"
          type="text"
          name="fullName"
          placeholder="이름을 입력하세요."
        />
        <button className="submit-button">나이 측정하기</button>
      </form>
    </div>
  );
}

export default App;
