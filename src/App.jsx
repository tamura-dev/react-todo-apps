import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { Imcomplete } from "./components/Imcomplete";
import { Complete } from "./components/Complete";

export const App = () => {
  //　未完了のTODO格納
  const [inputVal, setInputVal] = useState([]);
  // 完了のTODO格納
  const [c_inputVal, setC_inputVal] = useState([]);
  //　インプットの値
  const [inputTodo, setInputTodo] = useState("");
  // 追加ボタン押下時
  const addInput = () => {
    if (inputTodo === "") return;
    // const text = document.getElementById("text").value;
    const newTodo = [...inputVal, inputTodo]; //追加するときは後ろにつけられる！
    setInputVal(newTodo);
    // input初期化
    setInputTodo("");
  };

  // 削除ボタン押下時
  const deleteTodo = (index) => {
    // console.log(todo.val);
    // alert(index);
    const newTodo = [...inputVal];
    newTodo.splice(index, 1); // 指定したキーの配列を削除
    // console
    setInputVal(newTodo);
  };

  // 完了ボタン押下時
  const completeTodo = (index) => {
    // console.log(todo.val);
    // alert(index);
    const newTodo = [...inputVal];
    const addTodo = [...c_inputVal, newTodo[index]];
    // alert(newTodo[index]);

    newTodo.splice(index, 1); // 指定したキーの配列を削除
    // console
    setInputVal(newTodo);
    setC_inputVal(addTodo);
  };

  // 戻すボタン押下時
  const returnTodo = (index) => {
    // alert("");
    const newTodo = [...c_inputVal];
    const addTodo = [...inputVal, newTodo[index]];
    newTodo.splice(index, 1);
    setC_inputVal(newTodo);
    setInputVal(addTodo);
  };

  const inputChange = (e) => {
    setInputTodo(e.target.value);
  };
  return (
    <>
      <InputTodo
        inputTodo={inputTodo}
        onClick={addInput}
        onChange={inputChange}
      />
      <Imcomplete
        inputVal={inputVal}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <Complete c_inputVal={c_inputVal} returnTodo={returnTodo} />
    </>
  );
};
