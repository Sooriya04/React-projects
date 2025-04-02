import React from "react";
function InputArea(props) {
  
  return (
    <div className="form">
      <input onChange={props.change} value = {props.inputText} type="text"/>
      <button onClick={props.add}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
