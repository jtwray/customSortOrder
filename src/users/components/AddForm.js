import { useState } from "react";

export function AddForm({ onAdd, selectedItem, setSelectedItem }) {
  const initialUser_addForm = { email: "", username: "", name: "" };
  const [newItem, setNewItem] = useState(initialUser_addForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...newItem, id: Date.now() });
    setNewItem(initialUser_addForm);
    setSelectedItem(null);
  };

  const handleChangeItem = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  if (selectedItem) return null;
  return (
    <fieldset
      style={{
        background: "#f0f0f0",
        border: "solid 1px #d1d1d1",
        borderRadius: "10px",
        color: "#373737"
      }}
    >
      <legend style={{ fontSize: 24 }}>
        {/* <h2>Add Item To List</h2> */}
        Add List Item
      </legend>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <fieldset
          style={{
            display: "inline-flex",
            // display: "inlineflex",
            width: "100%",
            padding: 15,
            flexDirection: "column",
            gap: "15px"
            // height: 300,
            // justifyContent: "center"
          }}
        >
          <label htmlFor="email">email:</label>
          <input
            style={{
              background: "#fafafa",
              borderRadius: 3,
              // marginTop: -12,
              height: 45
            }}
            required
            name="email"
            type="email"
            id="emailInputField"
            value={newItem?.email}
            onChange={handleChangeItem}
          />
          <label htmlFor="username">username:</label>
          <input
            style={{
              background: "#fafafa",
              borderRadius: 3,
              // marginTop: -12,
              height: 45
            }}
            required
            name="username"
            // type="username"
            id="usernameInputField"
            value={newItem?.username}
            onChange={handleChangeItem}
          />
          <label htmlFor="name">name:</label>
          <input
            style={{
              background: "#fafafa",
              borderRadius: 3,
              // marginTop: -12,
              height: 45
            }}
            required
            name="name"
            // type="name"
            id="nameInputField"
            value={newItem?.name}
            onChange={handleChangeItem}
          />
        </fieldset>
        <fieldset
          style={{
            display: "inline-flex",
            // display: "inlineflex",
            padding: "15px",
            paddingTop: "45px",
            // display:'block',
            flexDirection: "column",
            justifyContent: "center",
            // gap: "15px",
            width: "100%"
            // height: 300
          }}
        >
          <button
            style={{
              background: "#fafafa",
              borderRadius: 3,
              // marginTop: -12,
              height: 45
            }}
            type="submit"
          >
            Add Item
          </button>
        </fieldset>
      </form>
    </fieldset>
  );
}
