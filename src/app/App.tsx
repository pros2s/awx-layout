import { Typography, Container } from '@mui/material';

import { TitledTabs } from '@/widgets/TitledTabs';
import { Volumes } from '@/widgets/Volumes';
import { Requisites } from '@/widgets/Requisites';

function App() {
  return (
    <Container maxWidth="xs">
      <TitledTabs />
      <Volumes />
      <Requisites />
    </Container>
  );
}

export default App;
