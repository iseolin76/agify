const getAge = async (name: string) => {
  const result = await (
    await fetch(`https://api.agify.io/?name=${name}&country_id=KR`)
  ).json();
  const age =
    result.age === null ? Math.floor(Math.random() * 101) : result.age;
  return age;
};

export default getAge;
