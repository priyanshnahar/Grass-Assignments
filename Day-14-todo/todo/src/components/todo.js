import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, deleteCount} from "../redux/actions";
import "./todo.css";

function Todo() {
  const [inputData, setInputData] = useState(" ");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <body>
      <div class="container">
        <h1>TO DO LIST</h1>
        <div id="newtask">
          <input
            type="text"
            placeholder="Task to be done.."
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <button
            onClick={() => dispatch(addCount(inputData), setInputData(""))}
          >
            Add
          </button>
        </div>

        <div className="tasks">
          {list.map((elem) => {
            return(
              <div className="task-list" key = {elem.id}>
              <h3>{elem.data}</h3>
              <button
                onClick={() => dispatch(deleteCount(elem.id),)}
              >
                Delete
              </button>
            </div>
            )
          })}
        </div>
      </div>
    </body>
  );
}

export default Todo;
