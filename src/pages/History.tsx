import { weeklyDataList } from "../data/weeklyMock";

function History() {
  return (
    <div className="codec-wrapper">
      <div className="codec-frame">
        <h2 className="codec-title">
          HISTORY
        </h2>

        {weeklyDataList.map((week) => (
          <div key={week.weekId} className="stat-card">
            <div className="stat-label">{week.weekId}</div>
            <div className="stat-value">
              {week.avgWeight.toFixed(1)} kg
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;