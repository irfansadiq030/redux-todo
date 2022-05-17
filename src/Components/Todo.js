import { React, useState } from "react";
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import { useDispatch, useSelector } from "react-redux";
import './todo.css';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducer.list);
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='Write here..'
                            onChange={(event) => { setInputData(event.target.value) }}
                            value={inputData}
                        />
                        <i className="fa fa-plus add-btn" onClick={() => { dispatch(addTodo(inputData), setInputData('')); }}></i>
                    </div>
                    {
                        list.map((elem) => {
                            return (
                                <div className="showItems" key={elem.id}>
                                    <div className="eachItem">
                                        <h3>{elem.data}</h3>
                                        <i className="far fa-trash-alt add-btn" title="Delete todo" onClick={() => { dispatch(deleteTodo(elem.id)); }}></i>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </>
    )
}
export default Todo