import React, { useState, useEffect } from 'react'

import { Box } from '@mui/material';

import Category from './Category';
import * as response from '../constants/FeaturesEndpointResponse.json'


const DisplayList = ({ searchText, selectedCategories }) => {
    const [categories, setCategories] = useState([]);

    const getFilteredFeatures = (category) => {
        const features = response.data?.features;
        const lowerSearchText = searchText.toLowerCase();
        const filteredFeatures = features
            .filter(feature => feature.categorySid?.id === category.sid?.id)
            .filter(feature =>
                feature.displayName.toLowerCase().includes(lowerSearchText) ||
                feature.epKeywords.some(keyword => keyword.toLowerCase().includes(lowerSearchText))
            )
            .sort((a, b) => {
                if (a.displayName.toLowerCase() < b.displayName.toLowerCase()) {
                  return -1;
                }
                if (a.displayName.toLowerCase() > b.displayName.toLowerCase()) {
                  return 1;
                }
                return 0;
              });
            console.log(filteredFeatures);
        return filteredFeatures;
    };

    useEffect(() => {
        setCategories(response.data?.featureCategories || []);
    }, []);

    const displayedCategories = categories.filter(category =>
        selectedCategories.includes("All") ? true : selectedCategories.includes(category.sid.id)
    );

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="98%" paddingRight='10px'>
            {displayedCategories.length > 0 ? displayedCategories.map(category => (
                <Category key={category.sid.id} features={getFilteredFeatures(category)} category={category} />
            )) : <h2>Please select at least one category</h2>
            }
        </Box>
    );
};

export default DisplayList;