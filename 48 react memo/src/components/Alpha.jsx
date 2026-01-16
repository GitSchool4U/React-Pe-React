import React, { memo, useEffect } from 'react'

const Alpha = ({ data }) => {

    useEffect(() => {
        console.log(data)
        console.log("child rendering...")
    })

    return (
        <div>
            Alpha
            <h1></h1>
        </div>
    )
}

export default memo(Alpha, (prevProp, nextProp) => {
    return prevProp.data === nextProp.data
})