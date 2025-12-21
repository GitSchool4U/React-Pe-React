import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button sx={{ width: 500 }} variant="outlined" color="error">
        Error
      </Button>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
    </Stack>
  );
}
