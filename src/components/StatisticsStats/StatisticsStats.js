export const StatisticsStats = ({ stats }) => {
  // console.log (props.data)
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  );
};
