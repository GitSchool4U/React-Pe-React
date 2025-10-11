import React from 'react'
import ComponentA from './component/ComponentA'
import ComponentB from './component/ComponentB'
import ComponentC from './component/ComponentC'

const App = () => {

    const option = 'd';

    switch (option) {
        case 'a':
            return <ComponentA />
        case 'b':
            return <ComponentB />
        case 'c':
            return <ComponentC />
        default:
            return <h1>Other component</h1>
    }
}

export default App