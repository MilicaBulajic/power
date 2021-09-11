import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from './../Navbar'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="sm">
        <div>
            <h2>Be powerful</h2>
            <p>Power is a simple way to organize your projects. It will help you to manage your tasks easily and reminds you of them – wherever you are. You can share tasks and lists with others, making it a great tool for teams as well.</p>
        </div>
      </Container>
    </React.Fragment>
  );
}
