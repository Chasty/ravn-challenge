export const EmptyTaskCard = () => {
  return (
    <div
      className={`flex flex-col p-4 h-[208px] rounded-lg gap-4 bg-neutral-4`}
    >
      <span className={`font-sans text-body-l-bold text-neutral-2`}>
        No Tasks Yet
      </span>
    </div>
  );
};
