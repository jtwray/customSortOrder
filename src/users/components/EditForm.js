import { useState } from "react";

export function EditForm({ onEdit, selectedItem, setSelectedItem }) {
  const [updatedItem, setUpdatedItem] = useState(selectedItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    // onEdit({ ...updatedItem, text: updatedItem.text });
    onEdit(updatedItem);
    setUpdatedItem(null);
    setSelectedItem(null);
  };

  const handleChangeItem = (e) => {
    setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value });
  };

  if (!updatedItem) return null;
  return (
    <fieldset style={styles.fieldset}>
      <legend style={styles.legend}>
        {/* <h2>Add Item To List</h2> */}
        Edit List Item
      </legend>
      <form style={styles.form} onSubmit={handleSubmit}>
        <section style={styles.formSection}>
          <label style={styles.inputLabel} htmlFor="email">
            email:
            <input
              style={styles.input}
              required
              name="email"
              type="email"
              id="emailInputField"
              value={updatedItem.email}
              onChange={handleChangeItem}
            />
          </label>

          <label style={styles.inputLabel} htmlFor="username">
            username:
            <input
              style={styles.input}
              required
              name="username"
              // type="username"
              id="usernameInputField"
              value={updatedItem.username}
              onChange={handleChangeItem}
            />
          </label>

          <label style={styles.inputLabel} htmlFor="name">
            name:
            <input
              style={styles.input}
              required
              name="name"
              // type="name"
              id="nameInputField"
              value={updatedItem.name}
              onChange={handleChangeItem}
            />{" "}
          </label>
          {/* </section> */}

          <button style={styles.button} type="submit">
            Edit Item
          </button>
        </section>
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
  legend: {
    fontSize: 24,
    padding: "15px",
    paddingBottom: 0,
    background: "#f0f0f0",
    borderTop: "solid 1px #d1d1d1",
    borderRadius: "10px",
    color: "#373737",
  },
  form: { display: "flex" },
  formSection: {
    display: "inline-flex",
    // display: "inlineflex",
    width: "100%",
    padding: 15,
    flexDirection: "column",
    gap: "15px",
    // height: 300,
    // justifyContent: "center"
  },
  button: {
    background: "#fafafa",
    borderRadius: 3,
    width: "100%",
    padding: 15,
    // marginTop: -12,
    height: 45,
  },
  input: {
    width: "-webkit-fill-available",
    paddingLeft: "10px",
    background: "#fafafa",
    borderRadius: 3,
    // marginTop: -12,
    height: 45,
  },
  inputLabel: { width: "100%" },
};
