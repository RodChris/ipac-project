import React, { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import DisplayList from "./components/DisplayList"
import Filter from './components/Filter';

import * as response from './constants/FeaturesEndpointResponse.json';

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  useEffect(() => {
    const categories = response.data?.featureCategories.sort((a,b) => a.sortOrder - b.sortOrder) || [];
    setAllCategories(categories);
    setSelectedCategories(["All"]);
  }, []);

  return (
    <Box display="flex" flexDirection="row" alignItems="flex-start" width="100%" height="100%" padding="10px">
      <Box width={350} height={850} px={3} py={1} mr={2} bgcolor="#f7f7f7">
        <Typography variant="h6" mb={2} p={2}>
          Filter Options
        </Typography>
        <Filter
          setSearchText={setSearchText}
          allCategories={allCategories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </Box>
      <Box flexGrow={1} width={0}>
        <DisplayList
          searchText={searchText}
          selectedCategories={selectedCategories}
        />
      </Box>
    </Box>
  );
};

export default App