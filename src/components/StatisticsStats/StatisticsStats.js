import { StatList, StatListEl } from "./StatisticsStats.styled";

export const StatisticsStats = ({ stats }) => {

  return (
    <StatList>
      {stats.map(stat => (
        <StatListEl key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </StatListEl>
      ))}
    </StatList>
  );
};
