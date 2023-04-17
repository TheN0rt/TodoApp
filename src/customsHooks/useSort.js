import { useMemo } from "react"

export const useSort = (todos, sortMethod) => {
    const sortedTodos = useMemo(() => {
        return sortMethod ? [...todos].sort((a,b) => a[sortMethod].localeCompare(b[sortMethod])) : todos
      }, [todos, sortMethod]) 
    return sortedTodos
}

export const useTodos = (todos, sortMethod, search) => {
    const sortedTodos = useSort(todos, sortMethod)
    const sortedAndFilteredTodos = useMemo(() => {
        return sortedTodos.filter(e => e.title.toLowerCase().includes(search.trim().toLocaleLowerCase())) 
      }, [search, sortedTodos])
    return sortedAndFilteredTodos
}
