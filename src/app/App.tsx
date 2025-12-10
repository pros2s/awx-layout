import { Typography, Container, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          The quick brown fox jumps over the lazy dog
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
