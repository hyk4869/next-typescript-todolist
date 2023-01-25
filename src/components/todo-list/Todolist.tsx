import Image from 'next/image';
import React, { useState, useRef } from 'react'
import styles from '../todo-list/Todolist.module.css'

export function Todolist() {
    type Todos ={
        id: number;
        list:any;
        checked:boolean;
    }

    const [todos,setTodos]=useState<Todos[]>([])

    const inputRef = useRef<HTMLInputElement | null>(null!)

    const handleClick=()=>{
        const name = inputRef.current?.value;

        if(name!.length >= 30){
            alert("30文字以内に入力してください")
            return
        }

        if(name === "") return;

        const task:Todos = {id:todos.length, list:name ,checked:true}
        setTodos([...todos,task])
        inputRef.current!.value = "";
    }   
    
    const handledelete = (id:number) =>{
        const task = todos.filter((task) => task.id !== id)
        setTodos(task)
    }

    
    const handleChecked = (id: number,checked: boolean) =>{
        const task = todos.map((task) => {
            if(task.id === id){
                task.checked = !checked
            }
            return task
        })
        setTodos(task)
    }

  return (
    <div className={styles.allCategories}>
        <div className={styles.titles}>
            <h1 className={styles.h1}>ToDo List with Next.js & Typescript</h1>
            <h2 className={styles.h2}>using useState, useRef Hooks</h2>
        </div>

        <div className={styles.logo}>
            <Image src={'/images/Next.js.png'} alt={'next.js'} width={180} height={100} className={styles.logoNext}/>
            <Image src={'/images/Typescript.png'} alt={'next.js'} width={110} height={110} className={styles.logoType}/>
        </div>

        <div className={styles.inputValue}>
            <input type="text" ref={inputRef} className={styles.value} />
            <button  onClick = {handleClick} className={styles.addBtn}>Add Task</button>
        </div>

        <div className={styles.addedTask}>
            <p>{todos.length} left to do</p>
        </div>

        <div className={styles.todoList}>
            {todos.map((task):any=>{
                return(
                    <div key={task.id} className={styles.divList}>
                        <div className={styles.pParent}>
                            <input type="text" defaultValue={task.list} className={styles.p} disabled={task.checked}/>
                        </div>
                        <div className={styles.btnParent}>
                            <input type="checkbox" id="checkbox" className={styles.inputBtn}/>
                            <label htmlFor="checkbox" className={styles.inputLabel} onClick={() =>handleChecked(task.id,task.checked)}>Edit</label>
                            <button className={styles.DeleteBtn} onClick={()=>handledelete(task.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
                    
        </div>
    </div>

  )
}
