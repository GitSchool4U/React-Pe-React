import './App.css'
import UserCard from './UserCard'

function App() {

  // const arr = ["Manas", "Muskan", "Mehek"]

  const arr = [
    { id: 1, name: 'Manas Kumar Lal', age: 21 },
    { id: 2, name: 'Muskan', age: 19 },
    { id: 3, name: 'gabbar Kumar Lal', age: 17 },
    { id: 4, name: 'babita', age: 15 },
    { id: 5, name: 'zokorald', age: 22 },
  ]


  // const arr = [
  //   ['html', 'css', 'react', 'javascript'],
  //   ['mongodb', 'node js', 'express js', 'aws']
  // ]

  return (
    <>
      <h1>Hello Manas</h1>

      {/* normal array */}
      {/* {arr.map((item, index) => {
        return (
          <h1 key={index}>{item}</h1>
        )
      })}  */}


      {/* array of objects */}
      {/* {
        arr.map((user)=>{
          console.log(user)
          return (
            <div className='bg-[lightseagreen] mt-5'>
              <p>{user.id}</p>
              <h1>{user.name}</h1>
              <p>{user.age}</p>
            </div>
          )
        })
      } */}


      {/* {arr.map((arrItem, index)=>(
        <div key={index}>
          {arrItem.map((item, index)=>{
            return (
              <h1 key={index}>{item}</h1>
            )
          })}
        </div>
      ))} */}


      {arr.map((user) => {
        return (
          // user.age > 18 && <UserCard key={user.id} userDetails={user}/>
          <UserCard key={user.id} userDetails={user}/>
        )
      })}

    </>
  )
}

export default App
