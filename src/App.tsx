import React, {useState} from 'react'
import { Navbar } from './components/Navbar'
import { Form } from './components/Form'
import { List } from './components/List'
import { ITodo } from './interfaces'

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]) 

    const addHandler = (title:string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }


         setTodos(prev => [newTodo, ...todos])
         //console.log('Add New Todo', title)
    }

    const toogleHand = (id: number) => {
        setTodos(prev => prev.map(todo => {            
            if(todo.id === id) {
                todo.completed = !todo.completed
            }     
            return todo
        }))

    }

    const removeHand = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }


    return <>
    <Navbar />
    <div className = "container">
         <Form onAdd = {addHandler} />
         <List 
         todos = {todos} 
         onToggle = {toogleHand} 
         onRemove = {removeHand} />
    </div>
    </>
}

export default App