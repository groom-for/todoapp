import React from "react";
import "../App.css";

function Form({ value, setValue, setTodoData }) {
  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;

    const newTodo = {
      id: String(Date.now()),
      title: text,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center gap-3"
    >
      <textarea
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full px-3 py-2 text-gray-700 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="해야 할 일을 입력하세요."
      />
      <input
        type="submit"
        value="입력"
        className="px-4 py-4 bg-[#b7d6be] text-[#275b32]  border-2 border-[#93c3af] rounded hover:text-white hover:bg-[#275b32] cursor-pointer"
      />
    </form>
  );
}

export default Form;
