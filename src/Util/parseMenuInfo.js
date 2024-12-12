export const getAllTypesFromMenuInfo = (menuInfo) => {
  return Object.keys(menuInfo);
};

export const getAllDishesFromMenuInfo = (menuInfo) => {
  const allTypes = getAllTypesFromMenuInfo(menuInfo);

  let result = [];
  allTypes.forEach((type) => {
    menuInfo[type].forEach(({ name }) => (result = [...result, name]));
  });

  return result;
};
