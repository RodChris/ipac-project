import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


const Feature = ({ feature }) => {

    const { displayName, epKeywords, optionalDescription } = feature

    const card = (
        <React.Fragment>
            <CardContent>            
                <Typography sx={{ textTransform: 'capitalize' }} variant="h5" component="div">
                    {displayName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {epKeywords.join(', ')}
                </Typography>
                <Typography variant="body2">
                    {optionalDescription}
                </Typography>
            </CardContent>
        </React.Fragment>
    )

    return (
        <Box sx={{ minWidth: 575, maxWidth: 575, marginBottom: '15px' }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}

export default Feature