export const removeListItem = (source, field, value) => {
  for (let i = 0; i < source.length; i++) {
    const item = source[i];
    if (item[field] === value) {
      source.splice(i, 1);
    }
  }
  return source;
};
