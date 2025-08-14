import React from "react";

const RateLimitCard = ({ used, limit, resetTime }) => {
  const percentage = Math.min((used / limit) * 100, 100);

  return (
    <div className="max-w-sm mx-auto rounded-2xl p-6 shadow-xl border border-white/20 bg-gradient-to-br from-white/80 to-white/30 backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">API Rate Limit</h2>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-600">
          Live
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-4 bg-gray-200/50 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-[progress_2s_ease-in-out] transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Usage Info */}
      <div className="flex justify-between text-sm font-medium mb-6">
        <span className="text-gray-700">{used} used</span>
        <span className="text-gray-700">{limit} total</span>
      </div>

      {/* Time Until Reset */}
      <div className="bg-white/50 border border-white/20 rounded-xl p-4 text-center shadow-inner">
        <p className="text-gray-500 text-sm mb-1">Resets in</p>
        <p className="text-lg font-semibold text-gray-900">{resetTime}</p>
      </div>
    </div>
  );
};

export default RateLimitCard;
