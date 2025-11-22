import { Trophy, Users } from "lucide-react";

interface StatsCardsProps {
  activeSessionsCount: number;
  recentSessionsCount: number;
}

function StatsCards({
  activeSessionsCount,
  recentSessionsCount,
}: StatsCardsProps) {
  return (
    <div className="lg:col-span-1 grid grid-cols-1 gap-6">
      {/* ACTIVE SESSIONS */}
      <div className="card bg-base-100 border border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
        <div className="card-body">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl bg-linear-to-br from-primary to-primary/60 shadow-md">
              <Users className="w-7 h-7 text-white" />
            </div>

            <span className="badge badge-primary badge-sm">LIVE</span>
          </div>

          <h3 className="text-5xl font-black tracking-tight leading-none">
            {activeSessionsCount}
          </h3>

          <p className="text-sm opacity-60 mt-1">Active Sessions</p>
        </div>
      </div>

      {/* TOTAL SESSIONS */}
      <div className="card bg-base-100 border border-secondary/20 hover:border-secondary/40 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
        <div className="card-body">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl bg-linear-to-br from-secondary to-secondary/60 shadow-md">
              <Trophy className="w-7 h-7 text-white" />
            </div>
          </div>

          <h3 className="text-5xl font-black tracking-tight leading-none">
            {recentSessionsCount}
          </h3>

          <p className="text-sm opacity-60 mt-1">Total Sessions</p>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
