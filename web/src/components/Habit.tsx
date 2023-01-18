interface HabitProps{
  completed: number
}

export function Habit(props:HabitProps){
  return(
    <div>
      <p className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex justify-center items-center">{props.completed}</p>
    </div>
  )
}