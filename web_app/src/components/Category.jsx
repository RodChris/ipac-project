import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Feature from './Feature';

const Category = ({ features, category }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                marginBottom: '20px',
                width: '100%',
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                },
            }}
        >
            <Accordion defaultExpanded sx={{ width: '100%' }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="category-content"
                    id="category-header"
                    sx={{
                        backgroundColor: '#f0f0f0',
                        borderBottom: '1px solid #ddd',
                        minHeight: '0 !important',
                        '& .MuiAccordionSummary-content': {
                            margin: '8px !important',
                        },
                    }}
                >
                    <Typography variant="h4" component="h2">
                        {category.name}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ padding: 0 }}>
                    <Paper
                        sx={{
                            paddingTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            maxHeight: 600,
                            overflow: 'auto',
                            width: '100%',
                            position: 'relative',
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                width: '100%',
                                textAlign: 'center',
                                backgroundColor: 'inherit',
                                position: 'sticky',
                                top: 0,
                                zIndex: 1100,
                                padding: '10px 0',
                                borderBottom: '1px solid #ddd',
                                display: { xs: 'none', sm: 'none' },
                            }}
                        >
                            {category.name}
                        </Typography>

                        {features && features.map(feature => (
                            <Feature feature={feature}></Feature>
                        ))}
                    </Paper>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default Category;
