import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import { collection, getDocs, query, orderBy, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const USER_ID = "c8pSJs3SJcB5GrbzWNaJkGZTTS12";

interface WeeklySummary {
  weekId: string;
  avgWeight: number;
  delta: number;
  avgKcal: number;
  avgSteps: number;
  state: string;
}

interface SystemState {
  currentKcalTarget: number;
  engineVersion: number;
  consecutiveDeviation: number;
  lastError: number;
}

function Dashboard() {
  const [weeks, setWeeks] = useState<WeeklySummary[]>([]);
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);
  const [systemState, setSystemState] = useState<SystemState | null>(null);

  useEffect(() => {
    const fetchData = async () => {

      // ---- WEEKLY SUMMARIES V3 ----
      const weeklyQuery = query(
        collection(db, "users", USER_ID, "weeklySummariesV3"),
        orderBy("createdAt", "asc")
      );

      const weeklySnapshot = await getDocs(weeklyQuery);

      const weeklyData: WeeklySummary[] = weeklySnapshot.docs.map((doc) => ({
        weekId: doc.data().weekId,
        avgWeight: doc.data().avgWeight,
        delta: doc.data().delta,
        avgKcal: doc.data().avgKcal,
        avgSteps: doc.data().avgSteps,
        state: doc.data().state,
      }));

      setWeeks(weeklyData);

      if (weeklyData.length > 0) {
        setSelectedWeekIndex(weeklyData.length - 1);
      }

      // ---- SYSTEM STATE ----
      const userDocRef = doc(db, "users", USER_ID);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        const data = userSnapshot.data();
        setSystemState(data.systemState);
      }
    };

    fetchData();
  }, []);

  const selectedWeek = weeks[selectedWeekIndex];

  return (
    <div className="codec-wrapper">
      <div className="codec-frame">

        <h2 className="codec-title">WEEKLY STATUS REPORT</h2>

        <div className="codec-week-selector">
          {weeks.map((week, index) => (
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

        {selectedWeek && (
          <div className="codec-grid">

            <StatCard
              label="AVG BODYWEIGHT"
              value={`${selectedWeek.avgWeight?.toFixed(1)} kg`}
              variant="neutral"
            />

            <StatCard
              label="DELTA"
              value={`${selectedWeek.delta > 0 ? "+" : ""}${selectedWeek.delta?.toFixed(1)} kg`}
              variant={
                selectedWeek.delta < 0
                  ? "positive"
                  : selectedWeek.delta > 0
                  ? "negative"
                  : "neutral"
              }
            />

            <StatCard
              label="AVG KCAL"
              value={`${selectedWeek.avgKcal?.toFixed(0)} kcal`}
              variant="neutral"
            />

            <StatCard
              label="AVG STEPS"
              value={`${selectedWeek.avgSteps?.toFixed(0)}`}
              variant="neutral"
            />

            <StatCard
              label="WEEK STATE"
              value={selectedWeek.state}
              variant={
                selectedWeek.state === "ABOVE_TARGET"
                  ? "negative"
                  : selectedWeek.state === "ON_TARGET"
                  ? "positive"
                  : "neutral"
              }
            />

          </div>
        )}

        {systemState && (
          <div className="codec-grid" style={{ marginTop: "20px" }}>

            <StatCard
              label="KCALS TARGET"
              value={`${systemState.currentKcalTarget} kcal`}
              variant="neutral"
            />

            <StatCard
              label="ENGINE VERSION"
              value={`V${systemState.engineVersion}`}
              variant="neutral"
            />

            <StatCard
              label="DEVIATION"
              value={`${systemState.consecutiveDeviation}`}
              variant="neutral"
            />

          </div>
        )}

        <div className="codec-status">
          Engine V3 – Fully Synced
        </div>

      </div>
    </div>
  );
}

export default Dashboard;