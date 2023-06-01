import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { env } from "~/env.mjs";

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Step into the world of TypeRacer Multiplayer on Twitch. Powered by advanced technology, our game offers a thrilling, real-time, multiplayer typing experience. Unleash your typing speed, compete with global players, and rise to the top. Your keyboard is your weapon. Start racing now"
        />

        <meta
          name="keywords"
          content="TypeRacer, Multiplayer, Twitch, Real-Time, Typing Game, Online Game, ReactJS, Next.JS, Replicache, TypeScript, T3 Stack, Competitive, Leaderboard, Gaming, Interactive, Fast-Paced, Keyboard Skills"
        />

        <meta name="robots" content="all" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="color-scheme" content="light only" />

        <link rel="icon" sizes="192x192" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/favicon.ico" color="#000000" />

        {/* - Open Graph tags for social media  */}
        <meta
          property="og:title"
          content="TypeRacer Multiplayer with Replicache - The Ultimate Typing Challenge"
        />
        <meta
          property="og:description"
          content="Step into the world of TypeRacer Multiplayer on Twitch. Powered by advanced technology, our game offers a thrilling, real-time, multiplayer typing experience. Unleash your typing speed, compete with global players, and rise to the top. Your keyboard is your weapon. Start racing now"
        />
        <meta
          property="og:image"
          content="stream-typeracer.vercel.app/card.png"
        />
        <meta property="og:url" content="stream-typeracer.vercel.app" />

        {/* - Twitter tags for social media  */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="TypeRacer Multiplayer with Replicache - The Ultimate Typing Challenge"
        />
        <meta
          name="twitter:description"
          content="Step into the world of TypeRacer Multiplayer on Twitch. Powered by advanced technology, our game offers a thrilling, real-time, multiplayer typing experience. Unleash your typing speed, compete with global players, and rise to the top. Your keyboard is your weapon. Start racing now"
        />
        <meta
          name="twitter:image"
          content="stream-typeracer.vercel.app/card.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="h-full text-slate-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
