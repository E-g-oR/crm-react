import { LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'

const PlanningItem: React.FC<{ title: string, value: number, limit: number }> = ({ title, value, limit }) => {
    const progressValue = (value / limit) * 100;

    const BreakLimitMessage = "Лимит превышен!";

    const getProgressColor = (value: number) => (value > 90) ? "error" :
        (value > 65) ? "warning" : "success"

    return (
        <Stack direction="column" spacing={2} mb={4}>
            <Typography variant='h5'>{title}</Typography>
            <Typography variant='body1'>{value} р. из {limit} р.</Typography>
            <LinearProgress variant="determinate" color={getProgressColor(progressValue)} value={progressValue} />
            {value >= limit ? <Typography variant="h6" color="error" >{BreakLimitMessage}</Typography> : null}
        </Stack>
    )
}

export default PlanningItem
