export const GameHome = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start space-y-8 py-7">
      <Header />
      <div className="container mx-auto max-w-3xl pt-6">
        <div className="flex w-full flex-col items-center justify-center space-y-4">
          <h3 className="font-sansDigit text-3xl font-medium tracking-tight text-white">
            {" "}
            Step 1: Multiplayer Message Board
          </h3>
          <ChatBox />
          <ChatBoxInput />
        </div>
      </div>
    </div>
  );
};

export const ChatBoxInput = () => (
  <div className="flex h-16 w-full items-start justify-start space-x-2">
    <input className="flex h-16 flex-1 rounded-lg border-2 border-violet-600 bg-violet-200 px-4 text-lg text-violet-700  focus-visible:ring-0 " />
    <button className="h-full rounded-lg bg-violet-800 px-4 text-white hover:bg-violet-900">
      Send Message
    </button>
  </div>
);

export const ChatBox = () => (
  <div className="flex h-96 w-full flex-col rounded-lg border-4 border-violet-600 bg-violet-300 p-4">
    test
  </div>
);

export const Header = () => (
  <div className="flex flex-col items-center space-y-3 text-center">
    <h1 className="font-sansDigit text-5xl font-bold tracking-tight text-white">
      Multiplayer <span className="text-[hsl(280,100%,70%)]">TypeRacer</span>
    </h1>
    <div className="flex items-baseline space-x-2">
      <h2 className="font-sansDigit text-2xl font-extralight tracking-tight text-white">
        with{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://replicache.dev/"
          className="font-semibold text-[hsl(280,100%,70%)] underline"
        >
          Replicache
        </a>
      </h2>
      <div className="items-center">
        <span>(</span>
        <a
          href="https://github.com/MarcinCebula/stream-typeracer"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sansDigit font-extralight tracking-tight text-white underline"
        >
          Fork On Github
        </a>
        <span>)</span>
      </div>
    </div>
  </div>
);
