import { TaskState } from "../../models/Task";
import { ADD_TASK, REMOVE_TASK, TaskActions, UPDATE_TASK } from "./actions";

const taskReducer = (state: TaskState, action: TaskActions): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.data }
            : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
