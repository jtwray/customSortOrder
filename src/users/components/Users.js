import React, { useState, useMemo, useEffect } from "react";
import { UsersTable } from "./UsersTable";
import { AddForm } from "./AddForm";
import { EditForm } from "./EditForm";
import { userAPI } from "../utils/axios";
import { sortUsers } from "../utils/sortUsers";
// import { mockUsersList } from "../utils/mockUsersList";
import { mockUsersList } from "../utils/mockUsersList.js";
import { mockShippingHistoryList_1000 } from "../utils/mockShippingHistoryList_1000.js";

export function Users() {
  const [listItems, setListItems] = useState(() => {
    console.log("useState--listItems.setListItems");
    return {
      timestamp: Date.now(),
      users: [],
    };
  });
  const [itemToEdit, setItemToEdit] = useState(() => {
    console.log("useState--itemToEdit.setItemToEdit");
    return null;
  });
  const [sortBy, setSortBy] = useState(() => {
    console.log("useState--SortBy.setSortBy");
    return { direction: "", key: "" };
  });

  const [sortByOrder, setSortByOrder] = useState(() => [
    { direction: "ascending", key: "username", type: "string" },
    { direction: "descending", key: "email", type: "string" },
    { direction: "ascending", key: "name", type: "string" },
    { direction: "ascending", key: "purchaseprice", type: "number" },
    { direction: "ascending", key: "dateofbirth", type: "date" },
  ]);

  useEffect(() => {
    userAPI
      .get("/users")
      // .then(({ data }) => setListItems(sortUsers(data ?? [], sortByOrder)))
      .then(
        ({ data }) => setListItems({ timestamp: Date.now(), users: data })
        // sortUsers(data ?? [], sortByOrder))
      )
      .catch((message) => console.error({ message }))
      .finally(() =>
        setListItems({ timestamp: Date.now(), users: mockUsersList })
      );
  }, []);

  const handleAddItem = (item) => {
    // console.log("i ran in handleAddItem");
    // setListItems(() => sortUsers([...listItems.users, item], sortByOrder));
    setListItems({ users: [...listItems.users, item], timestamp: Date.now() });
  };

  const handleEditItem = (editedItem) => {
    const users = listItems?.users?.map((item) =>
      item.id === editedItem.id ? (item = editedItem) : item
    );

    setListItems({ users, timestamp: Date.now() });
  };

  // const sortedUsers = useMemo(() => {
  //   // return sortUsers(listItems, sortBy);
  //   return sortUsers(listItems, sortBy);
  // }, [listItems, sortBy]);
  const sortedUsers = useMemo(() => {
    // return sortUsers(listItems, sortBy);
    console.log("i ran on likne 57 in useMemo");
    return sortUsers(listItems?.users, sortByOrder);
  }, [
    // JSON.stringify(listItems?.users),
    // JSON.stringify(sortByOrder),
    // arrays or lists will update correctly in dependency arrays but only if they include primitives only
    // functions and objects will be created new on every render
    // use a primitiive  such as an object key that is a string or number

    listItems.timestamp,
  ]);

  return (
    <div style={styles.usersContainer}>
      <fieldset style={styles.fieldset}>
        <legend style={styles.legend}>Users</legend>
        <UsersTable
          users={sortedUsers.users}
          setItemToEdit={setItemToEdit}
          itemToEdit={itemToEdit}
        />

        <div style={{ margin: "15px  0" }}>
          <AddForm
            key={itemToEdit?.id ?? "addform"}
            onAdd={handleAddItem}
            onEdit={handleEditItem}
            itemToEdit={itemToEdit}
            setItemToEdit={setItemToEdit}
          />
        </div>
        <EditForm
          key={itemToEdit?.id}
          onEdit={handleEditItem}
          itemToEdit={itemToEdit}
          setItemToEdit={setItemToEdit}
        />
      </fieldset>
    </div>
  );
}
const styles = {
  usersContainer: {
    // alignItems: "center",
    display: "flex",
    // flexDirection: "row",
    width: "880px",
    margin: "0 auto",
    fontFamily: "sans-serif",
    gap: 45,
    padding: 15,
  },
  fieldset: {
    background: "#f0f0f0",
    border: "solid 1px #d1d1d1",
    borderRadius: "10px",
    color: "#373737",
  },
  legend: {
    fontSize: 32,
  },
};
