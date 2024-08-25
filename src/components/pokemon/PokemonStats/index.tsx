import { Divider } from "@/components/ui/Divider";
import { Stat, StatProp } from "@/components/ui/Stat";

interface PokemonStatsProps {
  stats: StatProp[];
}

export const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <div className="w-auto">
      {stats.map((stat) => (
        <div key={stat.name}>
          <Stat name={stat.name} value={stat.value} />
          <Divider />
        </div>
      ))}
    </div>
  );
};
