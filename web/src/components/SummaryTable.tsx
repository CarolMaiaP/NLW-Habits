import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning.tsx"
import { HabitDay } from "./HabitDay"

export function SummaryTable(){
  const weekDays = [
    'D', 'S', 'T', 'Q', 'Q', 'S', 'S'
  ]

  const summaryDates = generateDatesFromYearBeginning()

  console.log(summaryDates)

  return(
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return(
            <div key={`${weekDay} - ${i}`} className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center">
              {weekDay}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return(
            <HabitDay key={date.toString()} />
          )
        })}
      </div>
    </div>
  )
}