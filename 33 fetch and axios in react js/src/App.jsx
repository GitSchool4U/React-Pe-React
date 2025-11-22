import { useEffect, useState } from 'react'
import './App.css'
import { axiosInstance } from './axios'

const App = () => {

  const [users, setUsers] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: '',
    age: '',
  })


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDetails(prevDetails => {
      return {
        ...prevDetails,
        [name]: value,
      }
    })
  }

  const fetchData = async () => {
    // const response = await axios({
    //   url: 'https://691ee09ebb52a1db22bf8355.mockapi.io/users'
    // })
    const response = await axiosInstance.get('/users', {
      // onDownloadProgress: (progress)=>{
      //   const percent = (progress.loaded / progress.total)* 100
      //   console.log(percent)
      // }
    })
    setUsers(response.data)
  }

  const postData = async () => {
    if (formDetails.name === "" || formDetails.age === "") {
      alert("Please fill all the details");
      return;
    }

    // await axios({
    //   url: 'https://691ee09ebb52a1db22bf8355.mockapi.io/users',
    //   method: 'post',
    //   data: formDetails
    // })

    await axiosInstance.post('/users', formDetails, {
      headers: {
        'Content-Type': 'application/json'
      },
      // onUploadProgress: (progress)=>{
      //   console.log(progress)
      //   const percent = (progress.loaded / progress.total)*100
      //   console.log(percent)
      // }
    })

    setFormDetails({
      name: '',
      age: '',
    })
    fetchData();
  }

  const editData = async () => {
    // await axios({
    //   url: `https://691ee09ebb52a1db22bf8355.mockapi.io/users/${formDetails.id}`,
    //   method: 'put',
    //   data: formDetails
    // })

    await axiosInstance.put(`/users/${formDetails.id}`, formDetails)

    setFormDetails({
      name: '',
      age: '',
    })

    fetchData();
  }

  const deleteUser = async (id) => {
    // await axios({
    //   url: `https://691ee09ebb52a1db22bf8355.mockapi.io/users/${id}`,
    //   method: 'delete',
    // })

    await axiosInstance.delete(`/users/${id}`)
    fetchData();
  }


  useEffect(() => {
    // axios.interceptors.request.use((config) => {
    //   // console.log(config.headers)
    //   config.headers.Authorization = "Bearer alsdjflksajdflkj"
    //   console.log(config.headers)
    //   return config
    // },(err)=>{
    //   console.log('Global err:', err)
    //   return Promise.reject(err)
    // })

    // axios.interceptors.response.use((response)=>{
    //   console.log(response)
    //   return response
    // })
    fetchData();
  }, [])

  return (
    <div>

      <input className='outline-none bg-gray-300 text-black rounded-lg p-3' type="text" placeholder='Enter name' name='name' value={formDetails.name} onChange={handleOnChange} />
      <br /><br />
      <input className='outline-none bg-gray-300 text-black rounded-lg p-3' type="number" placeholder='Enter age' name='age' value={formDetails.age} onChange={handleOnChange} />
      <br /><br />


      {formDetails.editMode ? (
        <button onClick={editData}>Save Data</button>
      ) : (
        <button onClick={postData}>Post Data</button>
      )}

      <br /><br />
      <hr />

      {users.map((userDetails) => {
        return (
          <div className='bg-gray-700 p-6 rounded-xl my-2' key={userDetails.id}>
            <p>Name: {userDetails.name}</p>
            <p>Age: {userDetails.age}</p>
            <button className='mr-3 mt-5' onClick={() => setFormDetails({ ...userDetails, editMode: true })}>Edit</button>
            <button onClick={() => deleteUser(userDetails.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default App