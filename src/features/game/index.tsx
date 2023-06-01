export const GameHome = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start py-7">
      <div className="flex flex-col space-y-3 items-center text-center">
        <h1 className="font-sansDigit text-5xl font-bold tracking-tight text-white">
          Multiplayer{" "}
          <span className="text-[hsl(280,100%,70%)]">TypeRacer</span>
        </h1>
        <h2 className="font-sansDigit text-2xl font-extralight tracking-tight text-white">
          with{" "}
          <a
            href="https://replicache.dev/"
            className="text-[hsl(280,100%,70%)] underline font-semibold"
          >
            Replicache
          </a>
        </h2>
      </div>
    </div>
  );
};
