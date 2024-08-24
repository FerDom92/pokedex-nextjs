interface ChipProps {
  name: string;
}

export const Chip = ({ name }: ChipProps) => {
  return (
    <div className="badge badge-default p-3 my-1 text-base badge-outline">
      {name}
    </div>
  );
};
