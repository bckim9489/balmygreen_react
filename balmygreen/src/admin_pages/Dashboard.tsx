import { Box, Container, Grid, Paper, Typography, styled } from "@mui/material";

export default function Dashboard() {

  return (
  <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={3}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography>
            오늘 방문자
          </Typography>
        </Paper>
      </Grid>
      
      <Grid item xs={12} md={4} lg={3}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography>
            총 방문자
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography>
            미답변 문의
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography>
            신규 예약 문의
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  );
}