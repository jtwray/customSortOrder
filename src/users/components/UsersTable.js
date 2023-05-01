import { useState, useEffect } from "react";
import { sortUsers } from "../utils/sortUsers";

export function UsersTable({ setItemToEdit, users }) {
  //   const sortedUsers = sortUsers(users);

  //   const sortedUsersList = useMemo(() => {
  //     console.log("line 9", {
  //       sortedUsers
  //     });
  //     return sortUsers(users);
  //   }, [JSON.stringify(users)]);

  //   console.log("line11", {
  //     sortedUsers,
  //     sortedUsersList: sortedUsersList
  //   });
  function handleSelectItem(e) {
    const clickedItem = JSON.parse(e.currentTarget.dataset.item);
    setItemToEdit(clickedItem);
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th} scope="row">
            Email
          </th>
          <th style={styles.th} scope="row">
            Name
          </th>
          <th style={styles.th} scope="row">
            Username
          </th>
        </tr>
      </thead>
      <tbody style={styles.tbody}>
        {/* {!!sortedUsersList?.length &&
          sortedUsersList?.map((item) => ( */}
        {!!users?.length &&
          users?.map((item, idx) => (
            // <tr key={item.id} onClick={() => handleSelectItem(item)}>
            <tr key={item.id} style={styles.tr(idx)}>
              {/* <tr key={item.id}> */}
              <td style={styles.td}>{item.email}</td>
              <td style={styles.td}>{item.name}</td>
              <td style={styles.td}>{item.username}</td>
              <td style={styles.td}>
                <button
                  onClick={handleSelectItem}
                  data-item={JSON.stringify(item)}
                >
                  <span role="img" aria-label="edit button image of a pencil">
                    📝
                  </span>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
const styles = {
  table: {
    background: "#f0f0f0",
    border: "solid 1px #d1d1d1",
    borderRadius: "10px",
    color: "#373737",
  },
  th: {
    textAlign: "start",
    padding: 15,
    textTransform: "uppercase",
  },
  tbody: { color: "#1e1e1e", background: "#fafafa" },
  tr: (idx) => ({ background: `${!!(idx % 2) ? "#fafafa" : "#ffffff"}` }),
  td: { padding: "15px" },
};
