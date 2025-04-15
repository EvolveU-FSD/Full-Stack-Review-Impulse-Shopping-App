import { useState } from 'react';
import { TextField, Button, Typography, Box, MenuItem } from '@mui/material';

const Admin = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    regretLevel: 3
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, price: parseFloat(form.price), regretLevel: parseInt(form.regretLevel) })
    });
    alert('Item uploaded!');
    setForm({ name: '', description: '', price: '', imageUrl: '', regretLevel: 3 });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Admin: Upload New Impulse Buy</Typography>
      <TextField fullWidth margin="normal" name="name" label="Name" value={form.name} onChange={handleChange} />
      <TextField fullWidth margin="normal" name="description" label="Description" value={form.description} onChange={handleChange} />
      <TextField fullWidth margin="normal" name="price" label="Price" type="number" value={form.price} onChange={handleChange} />
      <TextField fullWidth margin="normal" name="imageUrl" label="Image URL" value={form.imageUrl} onChange={handleChange} />
      <TextField
        select
        fullWidth
        margin="normal"
        name="regretLevel"
        label="Regret Level"
        value={form.regretLevel}
        onChange={handleChange}
      >
        {[1, 2, 3, 4, 5].map(level => (
          <MenuItem key={level} value={level}>{'🔥'.repeat(level)}</MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary">Upload</Button>
    </Box>
  );
};

export default Admin;