import { useState, useEffect } from "react";
import { sortUsers } from "../utils/sortUsers";

export function UsersTable({ setSelectedItem, users }) {
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
    setSelectedItem(clickedItem);
  }

  return (
    <table
      style={{
        background: "#f0f0f0",
        border: "solid 1px #d1d1d1",
        borderRadius: "10px",
        color: "#373737"
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              textAlign: "start",
              padding: 15,
              textTransform: "uppercase"
            }}
            scope="row"
          >
            Email
          </th>
          <th
            style={{
              textAlign: "start",
              padding: 15,
              textTransform: "uppercase"
            }}
            scope="row"
          >
            Name
          </th>
          <th
            style={{
              textAlign: "start",
              padding: 15,
              textTransform: "uppercase"
            }}
            scope="row"
          >
            Username
          </th>
        </tr>
      </thead>
      <tbody style={{ color: "#1e1e1e", background: "#fafafa" }}>
        {/* {!!sortedUsersList?.length &&
          sortedUsersList?.map((item) => ( */}
        {!!users?.length &&
          users?.map((item, idx) => (
            // <tr key={item.id} onClick={() => handleSelectItem(item)}>
            <tr
              key={item.id}
              style={{ background: `${!!(idx % 2) ? "#fafafa" : "#ffffff"}` }}
            >
              {/* <tr key={item.id}> */}
              <td style={{ padding: "15px" }}>{item.email}</td>
              <td style={{ padding: "15px" }}>{item.name}</td>
              <td style={{ padding: "15px" }}>{item.username}</td>
              <td style={{ padding: "15px" }}>
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
