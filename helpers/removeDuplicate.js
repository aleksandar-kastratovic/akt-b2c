export const removeDuplicate = (array) => {
  let result = array.reduce((unique, o) => {
    if (!unique.some((obj) => obj.id === o.id)) {
      unique.push(o);
    }
    return unique;
  }, []);
  return result;
};
