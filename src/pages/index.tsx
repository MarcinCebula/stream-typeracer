import { type NextPage } from "next";
// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { GameHome } from "~/features/game";
// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>
          TypeRacer Multiplayer with Replicache - The Ultimate Typing Challenge
        </title>
      </Head>
      <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container mx-auto max-w-7xl">
          <GameHome />
        </div>
      </main>
    </>
  );
};

export default Home;
{/* <AuthShowcase /> */}

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
