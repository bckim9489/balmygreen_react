import { Box, Container, Grid, Paper, Typography, styled } from "@mui/material";
import AppWidgetSummary from "../components/app-widget-summary";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {

  return (
    // <Box sx={{ width: '100%' }}>
    //   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //     <Grid xs={6}>
    //       <Item>1</Item>
    //     </Grid>
    //     <Grid xs={6}>
    //       <Item>2</Item>
    //     </Grid>
    //     <Grid xs={6}>
    //       <Item>3</Item>
    //     </Grid>
    //     <Grid xs={6}>
    //       <Item>4</Item>
    //     </Grid>
    //   </Grid>
    // </Box>
    <Container maxWidth="xl">

    <Grid container spacing={3}>
      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            //icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
      </Grid>

      <Grid xs={12} sm={6} md={3}>

      </Grid>

      <Grid xs={12} sm={6} md={3}>
 
      </Grid>

      <Grid xs={12} sm={6} md={3}>

      </Grid>

      <Grid xs={12} md={6} lg={8}>
        
      </Grid>

      <Grid xs={12} md={6} lg={4}>
        
      </Grid>

      <Grid xs={12} md={6} lg={8}>
        
      </Grid>

      <Grid xs={12} md={6} lg={4}>
        
      </Grid>

      <Grid xs={12} md={6} lg={8}>
        
      </Grid>
    </Grid>
  </Container>
  );
}