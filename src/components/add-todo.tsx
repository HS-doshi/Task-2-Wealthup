// const AddTodo : any () => < h2> 2nd Project of Wealthup.  </h2>
'use client'
import { FormEvent, useState } from "react";
import { useTodos } from "@/store/todos";

export function AddTodo() {
    const [todo, setTodo] = useState("");
    const { handleAddTodo } = useTodos();

    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleAddTodo(todo)
        setTodo("");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Write you want to add todo :" value={todo}
                onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">ADD</button>
        </form>
    )
}

export default AddTodo;
