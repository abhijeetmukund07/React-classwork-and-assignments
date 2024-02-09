import React from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../../contexts/Todo Contexts/TodoContext";
import { useContext } from "react";

function AddTodo() {
  let [task, setTask] = useContext(TodoContext);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function handleFormSubmit(userObj) {
    setTask([...task, userObj]);
  }

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit(handleFormSubmit)}
        className="m-3 p-4"
      >
        <h4 className=" text-center mb-4" style={{ color: "orange" }}>
          Add Tasks
        </h4>
        <input
          type="text"
          className="form-control"
          {...register("task", { required: true })}
        />
        {errors.taks?.type === "required" && (
          <p className="text-danger">Please Enter the Task</p>
        )}
        <button
          type="submit"
          className="btn btn-success p-1 m-3 d-block mx-auto"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
