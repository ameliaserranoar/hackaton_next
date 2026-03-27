'use client';
import { useState, useEffect } from 'react';

export default function MinuteroPage() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-4xl font-bold">Timer</h1>
            <div className="text-6xl font-mono font-bold">{formatTime(time)}</div>
            <div className="flex gap-4">
                <button
                    onClick={handleStart}
                    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Iniciar
                </button>
                <button
                    onClick={handleStop}
                    className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                    Parar
                </button>
                <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Resetear
                </button>
            </div>
        </div>
    );
}