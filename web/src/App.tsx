import { Habit } from "./components/Habit"


function App() {
  return (
    <>
      <Habit completed={4} />
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={2} />
    </>
  )
}

export default App
