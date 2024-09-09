import gql from "graphql-tag";
import GET_TASKS from "./getTasks.graphql";
import GET_PROFILE from "./getProfile.graphql";

export const GET_TASKS_QUERY = gql(GET_TASKS);
export const GET_PROFILE_QUERY = gql(GET_PROFILE);
