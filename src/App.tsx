import StatCard from "./components/StatCard";
import { weeklyData } from "./data/weeklyMock";

function App() {
  return (
    <>
      <header className="codec-header">
        HEAVYQUEST
      </header>

      <div className="codec-wrapper">
        <div className="codec-frame">

          <h2 className="codec-title">
            WEEKLY STATUS REPORT
          </h2>

          <div className="codec-grid">

            <StatCard
              label="AVG BODYWEIGHT"
              value={`${weeklyData.avgWeight.toFixed(1)} kg`}
              highlight
            />

            <StatCard
              label="DELTA"
              value={`${weeklyData.delta > 0 ? "+" : ""}${weeklyData.delta.toFixed(1)} kg`}
              highlight
            />

            <StatCard
              label="TRAINING SESSIONS"
              value={`${weeklyData.sessions}`}
            />

          </div>

          <div className="codec-status">
            Performance Monitor v1.0
          </div>

        </div>
      </div>
    </>
  );
}

export default App;