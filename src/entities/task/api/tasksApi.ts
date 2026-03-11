import type { Task } from "@entities/task";
import { baseApi } from "@shared/api/baseApi.ts";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => "todos",
      transformResponse: (resp: Task[]) => resp,
      providesTags: ["TasksList"]
    })
  }),
  overrideExisting: false
});

export const { useGetTasksQuery } = tasksApi;
