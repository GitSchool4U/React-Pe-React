import React from 'react'

const Popup = ({popup, setPopup, title, description}) => {

    return (
        <>
            {popup && (
                <div className='absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
                    <button onClick={() => {
                        setPopup(false);
                    }} className='bg-[#242424] absolute top-[1rem] right-[1rem]'>❌</button>

                    <div className='w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424] rounded-2xl p-5 flex items-center justify-center flex-col'>
                        <h1 className='text-2xl'>⚠️ {title}</h1>
                        <p className='text-lg my-5'>{description}</p>

                        <div className='flex gap-10'>
                            <button className='bg-[tomato]'>No</button>
                            <button className='bg-green-500'>Yes</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup