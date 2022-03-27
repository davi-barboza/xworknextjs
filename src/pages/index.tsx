import { Box, Container, IconButton } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { GetServerSideProps } from "next";
import { getSession, signIn, useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/app",
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
    signIn("github");
  }

  return (
    <Container
      maxWidth="sm"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <h1 style={{ textAlign: "center" }}>SignIn</h1>
        <IconButton onClick={handleSignIn}>
          <img src="icons/github-icon.png" alt="Github" />
        </IconButton>
      </Box>
    </Container>
  );
}
