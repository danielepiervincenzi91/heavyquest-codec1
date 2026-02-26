import { useState } from "react";
import StatCard from "./components/StatCard";
import { weeklyDataList } from "./data/weeklyMock";

function App() {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(
    weeklyDataList.length - 1
  );

  const selectedWeek = weeklyDataList[selectedWeekIndex];

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

          {/* Week Selector */}
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <select
              value={selectedWeekIndex}
              onChange={(e) =>
                setSelectedWeekIndex(Number(e.target.value))
              }
              style={{
                background: "#081a12",
                color: "#00ff66",
                border: "1px solid #00ff66",
                padding: "6px 10px",
                fontFamily: "Rajdhani",
                letterSpacing: "2px",
              }}
            >
              {weeklyDataList.map((week, index) => (
                <option key={week.weekId} value={index}>
                  {week.weekId}
                </option>
              ))}
            </select>
          </div>

          <div className="codec-grid">

            <StatCard
              label="AVG BODYWEIGHT"
              value={`${selectedWeek.avgWeight.toFixed(1)} kg`}
              variant="neutral"
            />

            <StatCard
              label="DELTA"
              value={`${selectedWeek.delta > 0 ? "+" : ""}${selectedWeek.delta.toFixed(1)} kg`}
              variant={
                selectedWeek.delta < 0
                  ? "positive"
                  : selectedWeek.delta > 0
                  ? "negative"
                  : "neutral"
              }
            />

            <StatCard
              label="TRAINING SESSIONS"
              value={`${selectedWeek.sessions}`}
              variant="neutral"
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