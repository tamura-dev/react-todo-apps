import React from "react";

export const Complete = (props) => {
  const { c_inputVal, returnTodo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {c_inputVal.map((val, index) => {
          return (
            <>
              <div key={val} className="list-row">
                <li>{val}</li>
                <button onClick={() => returnTodo(index)}>戻す</button>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};
