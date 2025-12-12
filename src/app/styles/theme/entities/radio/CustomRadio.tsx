import { styled } from '@mui/material';

export const BpIcon = styled('span')(() => ({
  borderRadius: '50%',
  width: 24,
  height: 24,

  border: '3px solid #535353',
}));

export const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'var(--bg-active)',
  border: 'none',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',

  '&::before': {
    display: 'block',
    width: 24,
    height: 24,
    backgroundImage: 'radial-gradient(#000,#000 35%,transparent 40%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#d7b81b',
    border: 'none',
  },
});
