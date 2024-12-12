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

export const getAllDishInfoFromMenuInfo = (menuInfo) => {
  const allTypes = getAllTypesFromMenuInfo(menuInfo);

  let result = [];
  allTypes.forEach((type) => {
    menuInfo[type].forEach((menu) => (result = [...result, menu]));
  });

  return result;
};
