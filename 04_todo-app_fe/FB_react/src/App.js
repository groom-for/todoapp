import React, { useState, useEffect, useCallback, useMemo } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [now, setNow] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => setNow(new Date()), 1000);
  return () => clearInterval(timer);
}, []);
  
  // 초기 할 일: localStorage → 없으면 기본값
  const [todoData, setTodoData] = useState(() => {
    try {
      const saved = localStorage.getItem("todoData");
      return saved
        ? JSON.parse(saved)
        : [
            { id: "1", title: "공부하기", completed: true, note: "" },
            { id: "2", title: "청소하기", completed: false, note: "" },
          ];
    } catch (e) {
      console.error(e);
      return [
        { id: "1", title: "공부하기", completed: true, note: "" },
        { id: "2", title: "청소하기", completed: false, note: "" },
      ];
    }
  });

  const [value, setValue] = useState("");

  // todoData 변경 시 localStorage 저장
  useEffect(() => {
    try {
      localStorage.setItem("todoData", JSON.stringify(todoData));
    } catch (e) {
      console.error(e);
    }
  }, [todoData]);

  // 전체 삭제
  const handleRemoveClick = useCallback(() => {
    if (!window.confirm("모든 할 일을 삭제하시겠습니까?")) return;
    setTodoData([]);
  }, []);

  // DnD 정렬
  const handleDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;

      const newItems = Array.from(todoData);
      const [moved] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, moved);
      setTodoData(newItems);
    },
    [todoData]
  );

  // 통계 (useMemo)
  const totalCount = useMemo(() => todoData.length, [todoData]);
  const completedCount = useMemo(
    () => todoData.filter((t) => t.completed).length,
    [todoData]
  );
  const activeCount = useMemo(
    () => totalCount - completedCount,
    [totalCount, completedCount]
  );

  return (
    // 화면 전체 파란 배경 + 가운데 흰 카드
    <div className="min-h-screen bg-[#c5cbc7] px-3 py-4 flex justify-center overflow-x-hidden">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow flex flex-col min-h-[70vh] px-6 py-4 box-border">
        {/* 헤더 */}
        <h1 className="flex justify-between items-center mb-3">
          <span className="text-2xl font-bold text-[#488b56]">
            To Do List (할 일 목록)
          </span>
          <button
            className="text-xs text-white px-3 py-1 rounded bg-red-200  hover:bg-red-400 hover:text-white"
            onClick={handleRemoveClick}>
            DEL ALL
          </button>
        </h1>

        {/* 통계 */}
        <div className="text-sm text-[#c4c7c3] mb-0">
          <span className="mr-4">전체 : <b>{totalCount}개</b></span>
          <span className="mr-4">완료 : <b>{completedCount}</b>개</span>
          <span className="mr-4">남음 : <b>{activeCount}</b>개</span>
        </div>

        

        {/* 리스트 영역 (내용이 많으면 카드가 아래로 늘어남) */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Lists todoData={todoData} setTodoData={setTodoData} />
        </DragDropContext>

        {/* 입력창: 항상 "흰 카드 안"의 맨 아래 */}
        <div className="mt-6 pt-4 border-t">
          <Form
            value={value}
            setValue={setValue}
            setTodoData={setTodoData}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
