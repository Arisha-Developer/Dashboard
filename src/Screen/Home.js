import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function Home() {
  return (
    <Container>
        <Grid container>
            <Grid item sm={12} md={6}>
<Typography variant='6'>Home</Typography>
            </Grid>
            <Grid item sm={12} md={6}>
            <Button variant="contained" className="jj" onClick={() => { navigation("/") }}>Logout</Button>
            </Grid>
            <Grid>
            <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima reprehenderit autem asperiores fuga nemo mollitia. Aut ducimus doloribus blanditiis itaque voluptas, optio, consectetur, recusandae aspernatur illum quidem laboriosam quasi!</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima reprehenderit autem asperiores fuga nemo mollitia. Aut ducimus doloribus blanditiis itaque voluptas, optio, consectetur, recusandae aspernatur illum quidem laboriosam quasi!</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima reprehenderit autem asperiores fuga nemo mollitia. Aut ducimus doloribus blanditiis itaque voluptas, optio, consectetur, recusandae aspernatur illum quidem laboriosam quasi!</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima reprehenderit autem asperiores fuga nemo mollitia. Aut ducimus doloribus blanditiis itaque voluptas, optio, consectetur, recusandae aspernatur illum quidem laboriosam quasi!</Typography>
            </Grid>
        </Grid>
    </Container>
  );
}

export default Home;
