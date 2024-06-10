import React, { useState } from "react";

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  const [editingTodo, setEditingTodo] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const EditTodo = (todo) => {
    setEditingTodo(todo);
    setEditText(todo.title);
    setEditDescription(todo.description);
  };

  const UpdateTodo = (e) => {
    e.preventDefault();
    onUpdateTodo({
      ...editingTodo,
      title: editText,
      description: editDescription,
    });
    setEditingTodo(null);
    setEditText("");
    setEditDescription("");
  };

  return (
    <ul className="space-y-2 overflow-x-hidden">
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="flex justify-between items-center bg-[#4F504E] p-4 rounded shadow text-black"
        >
          {editingTodo && editingTodo._id === todo._id ? (
            <form onSubmit={UpdateTodo} className="flex space-x-2 flex-grow">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                // className="border p-2 rounded-l w-full text-white"
                className="border p-2 rounded-[5px] w-[30%] h-[45px] font-semibold text-black bg-white placeholder-black placeholder:font-semibold"

              />
              <textarea
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                // className="border p-2 rounded-l w-full text-white"
                className="border p-2 rounded-[5px] w-[30%] h-[45px] font-semibold text-black bg-white placeholder-black placeholder:font-semibold"

              />
              <button
                type="submit"
                // className="bg-green-500 text-white px-4 py-2 rounded-r mr-2"
                className={`bg-transparent rounded-full text-green-500 outline-none `}

              >
                {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="2em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg> */}
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"></path></svg>
              </button>
              <button
                type="button"
                className="bg-transparent text-white rounded"
                onClick={() => setEditingTodo(null)}
              >
                <svg stroke="currentColor" fill="red" strokeWidth="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="#D50000" d="M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18s18-8.1,18-18S33.9,6,24,6z M24,10c3.1,0,6,1.1,8.4,2.8L12.8,32.4 C11.1,30,10,27.1,10,24C10,16.3,16.3,10,24,10z M24,38c-3.1,0-6-1.1-8.4-2.8l19.6-19.6C36.9,18,38,20.9,38,24C38,31.7,31.7,38,24,38 z"></path></svg>
              </button>
            </form>
          ) : (
            <>
              <div className="flex flex-col border-b-black">
                <span
                  className={`flex-grow ${
                    todo.completed ? "line-through" : ""
                  }`}
                  style={{
                    color: todo.completed ? "gray" : "#FF930F",
                    fontSize: todo.completed ? "1.5rem" : "2rem",
                  }}
                >
                  {todo.title}
                </span>
                <span
                  style={{
                    color: todo.completed ? "gray" : "white",
                    fontSize: "1.2rem",
                  }}
                >
                  {todo.description}
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  className="px-2 py-2 bg-transparent text-yellow-600 rounded"
                  onClick={() => EditTodo(todo)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586	c-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"></path>
                    <path d="M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5	h6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"></path>
                  </svg>
                </button>
                <button
                  className={`px-2 py-2 bg-white w-50px  rounded-full text-[#32cd32] border-[#32cd32] h-[40px] ${
                    todo.completed
                      ? " outline-none border-none"
                      : " "
                  }`}
                  onClick={() =>
                    onUpdateTodo({ ...todo, completed: !todo.completed })
                  }
                >
                  {todo.completed ? (
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.33929 4.46777H7.33929V7.02487C8.52931 6.08978 10.0299 5.53207 11.6607 
                   5.53207C15.5267 5.53207 18.6607 8.66608 18.6607 12.5321C18.6607 16.3981 15.5267 19.5321 11.6607 19.5321C9.51025 
                   19.5321 7.58625 18.5623 6.30219 17.0363L7.92151 15.8515C8.83741 16.8825 10.1732 17.5321 11.6607 17.5321C14.4222 
                   17.5321 16.6607 15.2935 16.6607 12.5321C16.6607 9.77065 14.4222 7.53207 11.6607 7.53207C10.5739 7.53207 9.56805 
                   7.87884 8.74779 8.46777L11.3393 8.46777V10.4678H5.33929V4.46777Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  ) : (
                    "Complete"
                  )}
                </button>

                <button
                //   className="px-4 py-2 bg-red-500 text-white rounded"
                   className={`px-2 py-2 bg-white w-50px  rounded-full text-[red] border-[red] h-[40px] `}
                  onClick={() => onDeleteTodo(todo._id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
