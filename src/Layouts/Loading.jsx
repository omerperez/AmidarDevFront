import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import "./Layout.css";

export default function Loading() {
  return (
    <div className="mt-10p">
        <Typography className='loading-text'>
            Loading...
        </Typography>
        <div className='loading-style'>
            <CircularProgress size={80} />
        </div>
    </div>
  );
}
