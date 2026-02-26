import { useState } from "react";
import StatCard from "../components/StatCard";
import { weeklyDataList } from "../data/weeklyMock";

function Dashboard() {
  const visibleWeeks = weeklyDataList.slice(-3);

  const [selectedWeekIndex, setSelectedWeekIndex] = useState(
    visibleWeeks.length - 1
  );

  const selectedWeek = visibleWeeks[selectedWeekIndex];

  return (
    <div className="codec-wrapper">
      <div className="codec-frame">

        <h2 className="codec-title">
          WEEKLY STATUS REPORT
        </h2>

        <div className="codec-week-selector">
          {visibleWeeks.map((week, index) => (
            <button
              key={week.weekId}
              onClick={() => setSelectedWeekIndex(index)}
              className={`codec-week-button ${
                index === selectedWeekIndex ? "active" : ""
              }`}
            >
              {week.weekId}
            </button>
          ))}
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
  );
}

export default Dashboard;