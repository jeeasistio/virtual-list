import TodoList from '@/components/TodoList'
import { Todo } from '../../../types/todo'

const fetchTodos = async () => {
    const todos = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
    ).then((res) => res.json())
    return todos as Todo[]
}

export default async function List() {
    const todos = await fetchTodos()

    return (
        <main>
            <TodoList todos={todos} />
        </main>
    )
}
