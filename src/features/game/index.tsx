export const GameHome = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start py-7">
      <div className="flex flex-col items-center space-y-3 text-center">
        <h1 className="font-sansDigit text-5xl font-bold tracking-tight text-white">
          Multiplayer{" "}
          <span className="text-[hsl(280,100%,70%)]">TypeRacer</span>
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
    </div>
  );
};
