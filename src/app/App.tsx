import { Typography, Container } from '@mui/material';

import { TitledTabs } from '@/widgets/TitledTabs';
import { Volumes } from '@/widgets/Volumes';

function App() {
  return (
    <Container maxWidth="sm">
      <TitledTabs />
      <Volumes />

      <Typography variant="h3" component="h3">
        Реквизиты
      </Typography>
    </Container>
  );
}

export default App;
