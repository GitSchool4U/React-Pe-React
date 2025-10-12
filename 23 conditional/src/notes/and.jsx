import React from 'react'

const App = () => {

    const hasMessage = "hii"

    return (
        <div>
            {/* {
                hasMessage
                    ?
                    <h1>{hasMessage}</h1>
                    :
                    null
            } */}

            {
                hasMessage && <h1>No message</h1>
            }
        </div>
    )
}


// short cicuiting
export default App