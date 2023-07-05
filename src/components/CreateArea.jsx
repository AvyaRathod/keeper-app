import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    text: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          text: prevValue.text
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          text: value
        };
      }
    });
  }
  function onAdd(event) {
    props.list((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText({
      title: "",
      text: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onAdd}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.text}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
