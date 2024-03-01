import { Box, Container, Grid, Paper, Typography, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {

  return (

    <Container maxWidth="xl" sx={{pt:2}}>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Box>
  </Container>
  );
}