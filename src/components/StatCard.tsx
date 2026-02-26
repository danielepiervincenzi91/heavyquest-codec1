type StatCardProps = {
    label: string;
    value: string;
    variant?: "positive" | "negative" | "neutral";
  };
  
  function StatCard({ label, value, variant }: StatCardProps) {
    let color = "#00ff66";
  
    if (variant === "negative") color = "#ff3b3b";
    if (variant === "neutral") color = "#b7ffcc";
  
    return (
      <div className="stat-card">
        <div className="stat-label">{label}</div>
        <div
          className="stat-value"
          style={{ color, textShadow: `0 0 14px ${color}` }}
        >
          {value}
        </div>
      </div>
    );
  }
  
  export default StatCard;