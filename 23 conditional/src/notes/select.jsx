import React from 'react'
import ComponentA from './component/ComponentA'
import ComponentB from './component/ComponentB'
import ComponentC from './component/ComponentC'

const App = () => {

    const option = 'a'
    const Component = option === 'a' ? ComponentA : ComponentB

    return (
        <div>
            <Component />
        </div>
    )
}

export default App