import React from 'react'

const App = () => {

    // const isLogin = false;
    const option = 'a';

    return (
        <div>
            {
                option === 'a'
                    ?
                    <h1>Component A</h1>
                    :
                    (
                        option === 'b'
                            ?
                            <h1>Component B</h1>
                            :
                            (
                                option === 'c'
                                    ?
                                    <h1>Component C</h1>
                                    :
                                    <h1>Other Components</h1>
                            )
                    )
            }
        </div>
    )
}

export default App