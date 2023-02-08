const getAge = (name: string) => {
  return fetch(`https://api.agify.io/?name=${name}&country_id=KR`).then((res) =>
    res.json()
  );
};

export default getAge;
