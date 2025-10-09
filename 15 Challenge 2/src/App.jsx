import './App.css'
import UserCard from './components/UserCard'
import users from './components/users.json'

function App() {

  return (
    <div className='grid grid-cols-4 gap-[1rem] max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1 p-[1rem]'>

      {users.map(function (obj) {
        console.log()
        return (
          <UserCard
            key={obj.id}
            title={obj.title}
            role={obj.role}
            likeCount={obj.likeCount}
            imgUrl={obj.imgUrl}
          />
        )
      })}

    </div>
  )
}

export default App
