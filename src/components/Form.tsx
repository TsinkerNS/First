import React, { useState, useRef } from 'react'


interface FormProps {
    onAdd(title: string): void
}

export  const Form: React.FC<FormProps> = props => {

const ref = useRef<HTMLInputElement>(null)

const KeyPressHand = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
    props.onAdd(ref.current!.value) 
    ref.current!.value = ''
    }
}

    return (
        <div className = "input-filed mt2">
            <input 
                 ref = {ref}
                 type = "text" 
                 id = "title" 
                 placeholder = "Введите навзавние дела"
                 onKeyPress = {KeyPressHand}
            
            />
            <label htmlFor = "title" className = "active">
                Введите назваие дела
            </label>
        </div>
    )
}