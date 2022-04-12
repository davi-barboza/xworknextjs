import { Box, Button, Container, IconButton } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/app',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default function SignIn() {
  async function handleSignIn() {
    signIn('github');
  }

  return (
    <Container
      maxWidth="sm"
      style={{
        height: '100vh',
        minWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button variant='outlined' onClick={handleSignIn} style={{ padding: '.5rem 1rem' }}>
          <GitHub style={{paddingRight: '.5rem'}} fontSize="large" />
          Login with GitHub
        </Button>
      </Box>
    </Container>
  );
}
