import { styled } from '@mui/material/styles';

export const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 20,
  height: 20,
  border: '2px solid #686868',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },

  'input:hover ~ &': {
    border: '2px solid #535353',
  },
}));

export const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#dbbc1c',
  border: 'none',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',

  '&::before': {
    content: '""',
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12%205c-.28%200-.53.11-.71.29L7%209.59l-2.29-2.3a1.003%201.003%200%2000-1.42%201.42l3%203c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003%201.003%200%200012%205z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E")',

    path: {
      fill: '#000',
    },
  },

  'input:hover ~ &': {
    backgroundColor: '#d7b81b',
    border: 'none',
  },
});
