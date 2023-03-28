import { useMemo } from "react"

export const useSort = (todos, sortMethod) => {
    const sortedTodos = useMemo(() => {
        return sortMethod ? [...todos].sort((a,b) => a[sortMethod].localeCompare(b[sortMethod])) : todos
      }, [todos, sortMethod]) // сделать кастомный хуки
    return sortedTodos
}

export const useTodos = (todos, sortMethod, search) => {
    const sortedTodos = useSort(todos, sortMethod)
    const sortedAndFilteredTodos = useMemo(() => {
        return sortedTodos.filter(e => e.title.toLowerCase().includes(search.trim().toLocaleLowerCase())) // реализовать функцию для выреза лишних пробелов между словами
      }, [search, sortedTodos])
    return sortedAndFilteredTodos
}