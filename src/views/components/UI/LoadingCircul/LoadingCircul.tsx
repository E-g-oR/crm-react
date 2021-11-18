import { CircularProgress } from '@mui/material'
import React from 'react'
import "./LoadingCircul.scss";

function LoadingCircul() {
    return (
        <div className="loading-wrapper" >
            <CircularProgress />
        </div>
    )
}

export default LoadingCircul
