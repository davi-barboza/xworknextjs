import { IconButton } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { GetServerSideProps } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { ChallengeBox } from "../../components/ChallengeBox";
import { CompletedChallenges } from "../../components/CompletedChallenges";
import { Countdown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import { ChallengesProvider } from "../../contexts/ChallengesContext";
import { CountdownProvider } from "../../contexts/CountdownContext";
import styles from "../../styles/pages/Home.module.css";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalExperience: number;
}

export default function Home(props: HomeProps) {
  const { data, status } = useSession();

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      totalExperience={props.totalExperience}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | X-work</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div className={styles.left}>
              <Profile expires={data?.expires} user={data?.user} />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div className={styles.right}>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
      <IconButton
        onClick={() => signOut({ callbackUrl: "/" })}
        style={{ position: "absolute", right: 20, bottom: 20 }}
      >
        <ExitToApp color="secondary" fontSize="large" />
      </IconButton>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, totalExperience } =
    ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      totalExperience: Number(totalExperience),
    },
  };
};
