import { OutputVariants } from '@/widgets/outputVariants';
import { Typography, Container, Stack } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <OutputVariants />

      <Typography variant="h3" component="h3">
        Объемы
      </Typography>

      <Typography variant="h3" component="h3">
        Реквизиты
      </Typography>
    </Container>
  );
}

export default App;
