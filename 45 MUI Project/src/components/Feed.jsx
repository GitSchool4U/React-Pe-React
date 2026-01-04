import Box from '@mui/material/Box'
import Card from './FeedCard'
import React from 'react'

const Feed = () => {
  return (
    <Box flex={4} sx={{
        display:'flex',
        flexDirection:'column',
        gap:'2rem',
        padding:'1rem 0'
    }}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Box>
  )
}

export default Feed