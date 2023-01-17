import './Habit.css'

interface HabitProps{
  completed: number
}

export function Habit(props:HabitProps){
  return(
    <div>
      <p className="habits">{props.completed}</p>
    </div>
  )
}