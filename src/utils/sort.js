export function sortById(listToSort) {
  const sortedList = [...listToSort];
  return sortedList.sort((a, b) => a.id > b.id ? 1 : -1);
}