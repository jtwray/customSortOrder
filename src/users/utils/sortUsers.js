export function sortUsers(unsortedUsersList, sortByOrder) {
  let finalSort = Array.from(unsortedUsersList);
  sortByOrder?.map(({ direction, key, type }) => {
    // let sortByValue = unsortedUsersList?.[0]?.[key] ?? "";
    // let sortByType = typeof sortByValue;
    // const _type = typeof unsortedUsersList?.[0]?.[key] ?? "";
    const sortingFunction = sortHash[type];
    if (direction === "descending") {
      finalSort.sort((a, b) => sortingFunction(b[key], a[key]));
    } else {
      finalSort.sort((a, b) => sortingFunction(a[key], b[key]));
    }
    // console.log({ finalSort, unsortedUsersList });
  });
  const timestamp = Date.now();
  console.log({ timestamp, finalSort });
  return { timestamp, users: finalSort };
}

let sortByList = [
  { direction: "ascending", key: "username", type: "string" },
  { direction: "descending", key: "email", type: "string" },
  { direction: "ascending", key: "name", type: "string" },
  { direction: "ascending", key: "purchaseprice", type: "number" },
  { direction: "ascending", key: "dateofbirth", type: "date" }
];
function sortByDate(a, b) {
  const date1 = new Date(a);
  const date2 = new Date(b);
  return date1 - date2;
}
function sortByNumber(a, b) {
  return a - b;
}
function sortByString(a, b) {
  return a.toLowerCase() > b.toLowerCase()
    ? 1
    : b.toLowerCase() > a.toLowerCase()
    ? -1
    : 0;
}
const sortHash = {
  number: sortByNumber,
  string: sortByString,
  date: sortByDate
};
// function sortKey(key){ }  dont worryabout infering the sort by type from the data--just pass the type along through as the key noepe the key is the column pass a third param called the type dateNumStr
//   unsortedUsersList.sort()

//   )
//   if (direction == "ascending") {
//     return unsortedUsersList.sort((a, b) => {
//       // console.log("a.username.toLowerCase()", a.username.toLowerCase());
//       return a.username.toLowerCase() > b.username.toLowerCase()
//         ? 1
//         : b.username.toLowerCase() > a.username.toLowerCase()
//         ? -1
//         : 0;
//     });
//   } else if (direction == "descending") {
//     return unsortedUsersList.sort((a, b) =>
//       a.username.toLowerCase() > b.username.toLowerCase()
//         ? -1
//         : b.username.toLowerCase() > a.username.toLowerCase()
//         ? 1
//         : 0
//     );
//   }
// }
// // export function sortUsers(unsortedUsersList, direction = "ascending") {
//   if (direction == "ascending") {
//     return unsortedUsersList.sort(({ username: a }, { username: b }) =>
//       a.toLowerCase() > b.toLowerCase() ? 1 : b > a ? -1 : 0
//     );
//   } else if (direction == "descending") {
//     return unsortedUsersList.sort(({ username: b }, { username: a }) =>
//       a.toLowerCase() > b.toLowerCase() ? 1 : b > a ? -1 : 0
//     );
//   }
// }

// const stringsArr = ["b", "a", "z", "z", "a", "B", "Z", "A"];
// const stringsArrSorted = [...stringsArr];
// stringsArrSorted.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
// console.log({ stringsArr, stringsArrSorted });
