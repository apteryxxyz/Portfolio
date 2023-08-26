export function TailwindIndicator() {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-1 left-1 flex h-7 w-7 items-center justify-center rounded-full bg-black text-sm text-white">
      <span className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        xs
      </span>
      <span className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </span>
      <span className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
        md
      </span>
      <span className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
        lg
      </span>
      <span className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
        xl
      </span>
      <span className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
        2xl
      </span>
    </div>
  );
}
