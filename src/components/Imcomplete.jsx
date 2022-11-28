import React from "react";

export const Imcomplete = (props) => {
  const { inputVal, completeTodo, deleteTodo } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {inputVal.map((val, index) => {
          return (
            <>
              <div key={val} className="list-row">
                <li>{val}</li>
                <button onClick={() => completeTodo(index)}>完了</button>
                <button onClick={() => deleteTodo(index)}>削除</button>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};
