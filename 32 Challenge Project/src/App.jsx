import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const maxLength = 100;
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [savedPasswords, setSavedPassword] = useState([]);
  const passwordRef = useRef(null);

  const generatePassword = () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (isNumberAllowed) str += "0123456789"
    if (isCharacterAllowed) str += "`~@#$%^*"

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length)
      let characterPicked = str.charAt(randomIndex)
      pass += characterPicked
    }

    setPassword(pass)
  }

  useEffect(() => {
    generatePassword()
  }, [length, isNumberAllowed, isCharacterAllowed])


  const copyPasswordToClipboard = () =>{
    navigator.clipboard.writeText(password)
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0,maxLength);
  }

  return (
    <>

      <div className='select-none flex flex-col gap-5 max-w-120 m-auto'>

        <h1 className='text-center mt-5 font-bold'>Password Generator</h1>

        <input
          type="text"
          placeholder='Password'
          readOnly={true}
          value={password}
          ref={passwordRef}
          className='outline-none border-none bg-gray-200 px-3 py-1 rounded-lg text-black'
        />

        <input
          type="range"
          min={0}
          max={maxLength}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <label htmlFor="numberAllowed">
          <input
            id='numberAllowed'
            type="checkbox"
            checked={isNumberAllowed}
            onChange={(e) => setIsNumberAllowed(e.target.checked)}
          />
          Number Allowed
        </label>

        <label htmlFor="characterAllowed">
          <input
            id='characterAllowed'
            type="checkbox"
            checked={isCharacterAllowed}
            onChange={(e) => setIsCharacterAllowed(e.target.checked)}
          />
          Character Allowed
        </label>

        <button className='bg-blue-500 px-3 py-2 rounded-lg' onClick={copyPasswordToClipboard}>Copy Password</button>

        <button className='bg-blue-500 px-3 py-2 rounded-lg' onClick={() => {
          setLength(8);
          setIsNumberAllowed(false);
          setIsCharacterAllowed(false);
        }}>Reset Password</button>

        <button className='bg-blue-500 px-3 py-2 rounded-lg' onClick={() => {
          setSavedPassword(prevPass => ([...prevPass, password]))
        }}>Save Password</button>

        {savedPasswords.map((item) => {
          return (
            <p key={item}>{item}</p>
          )
        })}
      </div>
    </>
  )
}

export default App
