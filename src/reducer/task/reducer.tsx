import { TaskState } from "../../models/Task";
import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_SUBTASK,
  TaskActions,
  UPDATE_TASK,
} from "./actions";

const taskReducer = (state: TaskState, action: TaskActions): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    // case UPDATE_TASK:
    //   return {
    //     ...state,
    //     tasks: state.tasks.map((task) =>
    //       task.id === action.payload.id
    //         ? { ...task, ...action.payload.data }
    //         : task
    //     ),
    //   };
    case UPDATE_TASK:
      const { taskId, columnId } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, columnId: columnId } : task
        ),
      };
    case TOGGLE_SUBTASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? {
                ...task,
                subtasks: task.subtasks?.map((subtask) =>
                  subtask.id === action.payload.subtaskId
                    ? { ...subtask, isChecked: !subtask.isChecked }
                    : subtask
                ),
              }
            : task
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
