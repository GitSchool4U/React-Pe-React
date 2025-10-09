import { useState } from "react"

export function Navbar({ data }) {

    let [count, setCount] = useState(0);

    return (
        <div>
          {count}
        </div>
    )
}


export default Navbar