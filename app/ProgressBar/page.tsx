
'use client';

import React, { useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0 && value <= 100) {
      setProgress(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      <h1 className="text-3xl font-bold">Progress Bar</h1>
      
      <div className="w-full max-w-md bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-red-500 h-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-lg font-semibold">{progress}%</p>
      
      <input
        type="text"
        min="0"
        max="100"
        value={progress}
        onChange={handleInputChange}
        className="w-full max-w-md p-2 border border-gray-300 rounded"
      />
    </div>
  );
}