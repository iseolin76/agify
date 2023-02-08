import getAge from "./api";
import IAgeHistory from "./interface";

export const showAgeAlert = (age: string) => {
  alert("당신의 예상 나이는 " + age + " 세 입니다.");
};

export const showAge = async (name: string, base?: IAgeHistory[]) => {
  const age = await getAge(name);
  showAgeAlert(age);

  //TODO: 따로 분리하기
  setLocalStrageAgeHistory(age, name, base);
};

export const setLocalStrageAgeHistory = (
  age: string,
  name: string,
  base?: IAgeHistory[]
) => {
  const result = {
    age: age,
    name: name,
  };
  localStorage.setItem("ageHistory", JSON.stringify([...(base ?? []), result]));
};
