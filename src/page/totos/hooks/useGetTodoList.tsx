
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ApiUser, TodoResponse } from '../../../api/api-router';
import { QUERY } from '../../../api/queryName';
import { TodoErrorResponse } from '../../../types/errTypes';

const useGetTodoList = () => {
  return useQuery<TodoResponse, AxiosError<TodoErrorResponse>>(QUERY.TODOLIST, ApiUser.todo.getTodoList, {
    // staleTime: 5000,
    // onError: (error) => {
    //   console.log(error, 'error is')
    // },
  });
};

export default useGetTodoList;