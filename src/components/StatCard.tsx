type StatCardProps = {
    label: string;
    value: string;
    highlight?: boolean;
  };
  
  function StatCard({ label, value, highlight }: StatCardProps) {
    return (
      <div className="stat-card">
        <div className="stat-label">{label}</div>
        <div
          className="stat-value"
          style={
            highlight
              ? { color: "#00ff66", textShadow: "0 0 14px #00ff66" }
              : undefined
          }
        >
          {value}
        </div>
      </div>
    );
  }
  
  export default StatCard;