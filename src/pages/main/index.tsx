import React from "react";
import { showAge, showAgeAlert } from "../../utils/age";
import IAgeHistory from "../../utils/interface";
import "./styles.css";

const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  const nameValue = e.currentTarget.fullName.value;
  e.currentTarget.reset();

  if (!nameValue) {
    alert("이름을 입력해주세요.");
    return;
  }

  const localAge = localStorage.getItem("ageHistory");

  if (!localAge) {
    showAge(nameValue);
    return;
  }

  const ageHistory: IAgeHistory[] = JSON.parse(localAge);
  const historyForName = ageHistory.filter(({ name }) => name === nameValue);

  if (historyForName.length < 1) {
    showAge(nameValue, ageHistory);
    return;
  }

  showAgeAlert(historyForName[0].age);
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
        <button type="submit" className="submit-button">
          나이 측정하기
        </button>
      </form>
    </div>
  );
}

export default App;
