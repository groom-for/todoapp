import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

function List({ data, index, todoData, setTodoData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data?.title || "");

  

  // 완료 체크 토글
  const handleCompleteChange = (id) => {
    setTodoData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // 항목 삭제
  const handleClick = (id) => {
    setTodoData((prev) => prev.filter((item) => item.id !== id));
  };

  // 수정 입력 변화 감지
  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  // 수정 저장
  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const newTodoData = todoData.map((item) => {
      if (item.id === data.id) {
        // 수정한 줄만 새로운 제목으로 교체
        return { ...item, title: editedTitle };
      } else {
        // 나머지 줄은 그대로 유지
        return item;
      }
    });

    // 변경된 배열을 상태에 반영
    setTodoData(newTodoData);
    // localStorage에도 업데이트 반영
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
    // 편집 모드 종료
    setIsEditing(false);
  };

  // 편집 모드일 때 렌더링
  if (isEditing) {
    return (
      <div className="w-full mb-4">
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <div className="w-full py-2">
          {/* 수정 입력창 */}
          <input
            type="text"
            onChange={handleEditChange}
            className="px-3 py-2 mr-4 text-gray-500 border rounded shadow w-4/5"
            value={editedTitle}
            autoFocus
          />

          <button
            type="submit"
            className="px-3 py-1 mr-2 text-sm text-white bg-gray-200 rounded hover:bg-gray-400"
          >
            저장
          </button>

          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setEditedTitle(data.title); // 취소 시 원래 제목 복원
            }}
            className="px-3 py-1 text-sm text-white bg-red-200 rounded hover:bg-red-400"
          >
            x
          </button>
          </div>
        </form>
      </div>
    );
  }

  // 일반 모드 렌더링
  return (
    <Draggable draggableId={String(data.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`flex items-center justify-between w-full px-4 py-2 my-2 border rounded transition-colors duration-200 ${
            data.completed
                ? "bg-[#d6e3d9] text-[#8ba590"
                : "bg-white text-gray-800"
            }`}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={data.completed}
              onChange={() => handleCompleteChange(data.id)}
              className="mr-2 transform scale-125 cursor-pointer"
            />
            <span className={`whitespace-pre-line break-words ${data.completed ? "line-through" : ""}`}>
              {data.title}
            </span>
          </div>

          <div>
            <div className="flex items-start flex-shrink-0 ml-4 gap-3">
              <button type="button" onClick={() => setIsEditing(true)}
                className="px-3 py-1 text-sm text-white bg-gray-200 rounded hover:bg-gray-400 whitespace-nowrap [writing-mode:horizontal-tb]">
                수정</button>
              <button type="button" onClick={() => handleClick(data.id)}
                className="px-3 py-1 text-sm text-white bg-red-200 rounded hover:bg-red-400">
                x</button>
            </div>
          </div>
        </div>
        
      )}
    </Draggable>
  );
}

export default React.memo(List);