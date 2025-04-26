'use client';
import React from 'react';
import Box from '@mui/material/Box';

const Loader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0,
                backgroundColor: 'white',
            }}
        >
            <span className='dimming-effect'>Innovista</span>
        </Box>
    );
};

export default Loader;
