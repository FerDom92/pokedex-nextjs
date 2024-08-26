export interface StatProp {
  name: string;
  value: number;
}

export const Stat = ({ name, value }: StatProp) => {
  return (
    <div className="flex flex-row gap-5 items-center justify-between">
      <p className="capitalize">{name}</p>

      <div className="flex flex-row gap-2 items-center max-w-[260px]">
        <progress
          className="progress progress-info w-56 mr-3"
          value={value}
          max="250"
        ></progress>
        <p>{value}</p>
      </div>
    </div>
  );
};
