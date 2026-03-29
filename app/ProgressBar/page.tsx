
'use client';

import React, { useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [inputValue, setInputValue] = useState('0');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value === '') {
      setInputValue('');
      setProgress(0);
      return;
    }

    const parsedValue = parseInt(value, 10);

    if (parsedValue >= 0 && parsedValue <= 100) {
      setInputValue(value);
      setProgress(parsedValue);
    }
  };

  const handleInputBlur = () => {
    if (inputValue === '') {
      setInputValue('0');
      setProgress(0);
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
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className="w-full max-w-md p-2 border border-gray-300 rounded"
      />
    </div>
  );
}
