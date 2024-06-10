import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const SubmitTodo = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onAddTodo(title, description);
      setTitle("");
      setDescription("");
    } else {
      if (title.trim() == "" && description.trim() == "") {
        alert("the fields cannot be blank");
      } else if (title.trim() == "" && description.trim().length > 0) {
        alert("please enter the title");
      } else if (description.trim() == "" && title.trim().length > 0) {
        alert("please enter the description");
      }
    }
  };
  return (
    <form className="flex mb-6 w-full">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 rounded-[5px] w-[30%] h-[45px] font-semibold text-black bg-white placeholder-black placeholder:font-semibold"
      />
      <textarea
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 rounded-[5px] w-[30%] h-[45px] font-semibold text-black bg-white ml-4 placeholder-black placeholder:font-semibold"
      />
      <button
        type="submit"
        className="bg-[#FF930F] w-[8rem] text-white ml-[200px] px-4 py-2 h-[40px] rounded-full"
        onClick={SubmitTodo}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
