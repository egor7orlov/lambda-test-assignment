import { useState } from 'react';
import axios from 'axios';
import { Button, Stack, TextField } from '@mui/material';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const url = new URL(import.meta.env.VITE_API_URL + '/count-words-by-category');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(url.toString(), { text });
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Stack spacing={2}>
      <TextField
        autoFocus
        placeholder={'Enter text'}
        multiline
        rows={8}
        value={text}
        helperText="Input"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        placeholder="Results will be here"
        multiline
        rows={10}
        helperText="Output"
        value={
          result
            ? Object.entries(result).reduce((acc, [category, count]) => {
                return acc + `${category}: ${count}\n`;
              }, '')
            : ''
        }
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        size="large"
      >
        Submit
      </Button>
    </Stack>
  );
}

export default App;
