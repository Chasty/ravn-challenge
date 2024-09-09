import gql from "graphql-tag";
import CREATE_TASK from "./createTask.graphql";
import UPDATE_TASK from "./updateTask.graphql";
import DELETE_TASK from "./deleteTask.graphql";

export const CREATE_TASK_MUTATION = gql(CREATE_TASK);
export const UPDATE_TASK_MUTATION = gql(UPDATE_TASK);
export const DELETE_TASK_MUTATION = gql(DELETE_TASK);
