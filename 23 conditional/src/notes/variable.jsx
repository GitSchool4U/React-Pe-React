import React from 'react'
import ComponentA from './component/ComponentA'
import ComponentB from './component/ComponentB'
import ComponentC from './component/ComponentC'

const App = () => {

    const option = 'r';
    let content = <h1>Hello how are you</h1>

    if (option === 'a') {
        content = <ComponentA />
    } else if (option === 'b') {
        content = <ComponentB />
    } else if (option === 'c') {
        content = <ComponentC />
    } else {
        content = <h1>Other component</h1>
    }

    return (
        <>
            <div>{content}</div>
        </>
    )
}

export default App