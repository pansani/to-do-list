
import styles from "./AddTask.module.css"
import {PlusCircle} from "phosphor-react"

export default function AddTask(){
    return(
        <form className={styles.addTaskContainer}>
            <input type="text" placeholder="Adicione uma nova tarefa" className={styles.addTaskInput}/>
           
                <button type="button" className={styles.addTaskButton}>Criar <PlusCircle size={16}/></button>
    
        </form>
    )
}