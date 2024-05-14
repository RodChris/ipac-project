import React, { useEffect } from 'react';

import { TextField, Box, Select, MenuItem, InputLabel, FormControl, OutlinedInput, Chip, Checkbox, ListItemText } from '@mui/material';

const Filter = ({ setSearchText, allCategories, selectedCategories, setSelectedCategories }) => {

    useEffect(() => {
        console.log(selectedCategories)
    }, [])

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleCategoryChange = (event) => {
        const {
            target: { value },
        } = event;

        // Check toggle
        if (value[value.length - 1] === 'All') {
            if (selectedCategories.length === allCategories.length) {
                // deselect all
                setSelectedCategories([]);
            } else {
                setSelectedCategories(allCategories.map((category) => category.sid.id));
            }
        } else {
            setSelectedCategories(typeof value === 'string' ? value.split(',') : value);
        }
    };

    const renderSelected = (selected) => {
        if (selected.length <= 3) {
            return selected.map((value) =>
                <Chip key={value} label={allCategories.find(c => c.sid.id === value)?.name || value} />
            );
        } else {
            const displayedChips = selected.slice(0, 3).map((value) =>
                <Chip key={value} label={allCategories.find(c => c.sid.id === value)?.name || value} />
            );
            return (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {displayedChips}
                    <Chip label={`+${selected.length - 3} more`} />
                </Box>
            );
        }
    };

    return (
        <Box mb={2} display="flex" flexDirection="column" gap={2} >
            <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                <InputLabel id="category-select-label">Categories</InputLabel>
                <Select
                    labelId="category-select-label"
                    multiple
                    value={selectedCategories}
                    onChange={handleCategoryChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Categories" />}
                    renderValue={renderSelected}
                    fullWidth
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: 285,
                                width: 250,
                            },
                        },
                    }}
                >
                    <MenuItem
                        value="All"
                        sx={{ fontWeight: selectedCategories.length === allCategories.length ? 'bold' : 'normal' }}
                    >
                        <Checkbox
                            checked={selectedCategories.length === allCategories.length}
                            indeterminate={selectedCategories.length > 0 && selectedCategories.length < allCategories.length}
                        />
                        <ListItemText primary="All Categories" sx={{ margin: 0 }} />
                    </MenuItem>
                    {allCategories.map((category) => (
                        <MenuItem key={category.sid.id} value={category.sid.id}>
                            <Checkbox checked={selectedCategories.includes(category.sid.id)} />
                            <ListItemText primary={category.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Search Features"
                variant="outlined"
                // value={searchText}
                onChange={handleSearchChange}
                fullWidth                
            />
        </Box>
    );
};

export default Filter;
