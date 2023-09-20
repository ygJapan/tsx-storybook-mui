import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function LaneSelectLabel() {
  const [text, setText] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setText(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="lane-select-label">レーン</InputLabel>
        <Select
          labelId="lane-select-label"
          id="lane-select"
          value={text}
          label="レーン"
          onChange={handleChange}
        >
          <MenuItem value={1}>TOP</MenuItem>
          <MenuItem value={2}>JG</MenuItem>
          <MenuItem value={3}>MID</MenuItem>
          <MenuItem value={4}>BOT</MenuItem>
          <MenuItem value={5}>SUP</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}