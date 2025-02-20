import Header from './components/Header'
import UserProfile from './components/UserProfile'
import Button from './components/Button'

const users = [
  { name: "John", age: "30", location: "India" },
  { name: "Steve", age: "30", location: "India" },
  { name: "Smith", age: "30", location: "India" },
  { name: "Anderson", age: "30", location: "India" },
  { name: "Sky", age: "30", location: "India" },
  { name: "John", age: "30", location: "India" },
  { name: "Steve", age: "30", location: "India" },
]
function App() {

  return (
    // <div> -> Extra div is created by React
    <>
      <Header />
      <Button />
      {
        users.map((user, idx) => (
          <UserProfile key={idx} name={user.name} age={user.age} location={user.location} />
        ))
      }
    </>
  )
}

export default App
