import { useState } from "react";

const initialUserForm = { email: "", username: "", name: "" };
export function AddForm({ onAdd, onEdit, itemToEdit, setItemToEdit }) {
  console.log(itemToEdit);

  const [newItem, setNewItem] = useState(itemToEdit ?? initialUserForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemToEdit) {
      onEdit(newItem);
    } else {
      onAdd({ ...newItem, id: Date.now() });
    }
    setNewItem(initialUserForm);
    setItemToEdit(null);
  };

  const handleChangeItem = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  // if (itemToEdit) return null;
  return (
    <fieldset style={styles.fieldset}>
      <legend style={styles.legend}>
        {/* <h2>Add Item To List</h2> */}
        {itemToEdit ? "Edit" : "Add"} List Item
      </legend>
      <form style={styles.form} onSubmit={handleSubmit}>
        <fieldset style={styles.fieldsetForm}>
          <label htmlFor="email">email:</label>
          <input
            style={styles.input}
            required
            name="email"
            type="email"
            id="emailInputField"
            value={newItem?.email}
            onChange={handleChangeItem}
          />
          <label htmlFor="username">username:</label>
          <input
            style={styles.input}
            required
            name="username"
            // type="username"
            id="usernameInputField"
            value={newItem?.username}
            onChange={handleChangeItem}
          />
          <label htmlFor="name">name:</label>
          <input
            style={styles.input}
            required
            name="name"
            // type="name"
            id="nameInputField"
            value={newItem?.name}
            onChange={handleChangeItem}
          />
        </fieldset>
        <fieldset style={styles.fieldsetBtn}>
          <button style={styles.button} type="submit">
            {itemToEdit ? "Edit" : "Add"} Item
          </button>
        </fieldset>
      </form>
    </fieldset>
  );
}
const styles = {
  fieldset: {
    background: "#f0f0f0",
    border: "solid 1px #d1d1d1",
    borderRadius: "10px",
    color: "#373737",
  },
  button: {
    background: "#fafafa",
    borderRadius: 3,
    // marginTop: -12,
    height: 45,
  },
  fieldsetBtn: {
    display: "inline-flex",
    // display: "inlineflex",
    padding: "15px",
    paddingTop: "45px",
    // display:'block',
    flexDirection: "column",
    justifyContent: "center",
    // gap: "15px",
    width: "100%",
    // height: 300
  },
  input: {
    background: "#fafafa",
    borderRadius: 3,
    // marginTop: -12,
    height: 45,
  },
  fieldsetForm: {
    display: "inline-flex",
    // display: "inlineflex",
    width: "100%",
    padding: 15,
    flexDirection: "column",
    gap: "15px",
    // height: 300,
    // justifyContent: "center"
  },
  form: { display: "flex" },
  legend: { fontSize: 24 },
};
