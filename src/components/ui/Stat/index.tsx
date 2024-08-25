export interface StatProp {
  name: string;
  value: number;
}

export const Stat = ({ name, value }: StatProp) => {
  return (
    <div className="flex flex-row items-center gap-5 justify-between">
      <p className="capitalize">{name}</p>

      <div className="flex flex-row gap-2 items-center">
        <progress
          className="progress progress-info w-56"
          value={value}
          max="250"
        ></progress>
        <p>{value}</p>
      </div>
    </div>
  );
};
