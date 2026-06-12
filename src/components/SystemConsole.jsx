import React, { useState, useEffect } from 'react';

const BOOT_LOGS = [
  "SYS_INIT: Bootstrapping core modules...",
  "DEXSTORE_DB: Connecting pgsql-replica-01.local... [CONNECTED]",
  "MEM_LOAD: Allocating V-Ram heap spaces... OK (14.2ms)",
  "DIAGNOSTIC: Port 8080 active. SSL handshake validated.",
  "SECURITY: Guard rails running. SHA-512 hashes matching.",
  "METRICS: Latency monitoring enabled. Current threshold < 8ms.",
  "SYS_READY: Nithish Mainframe Online. Welcome, Architect."
];

export default function SystemConsole() {
  const [logs, setLogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= BOOT_LOGS.length) return;

    const timeout = setTimeout(() => {
      setLogs((prev) => [...prev, BOOT_LOGS[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
    }, 400);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-dark-slate/60 border border-white/5 rounded-lg overflow-hidden backdrop-blur-md glow-violet font-mono text-[10px] md:text-xs hardware-accelerated">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/40">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/40" />
        </div>
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">DEX-CONSOLE v1.0.8</span>
        <span className="text-[10px] text-neon-violet font-bold animate-pulse">● LIVE</span>
      </div>
      <div className="p-4 md:p-6 space-y-2 min-h-[180px] md:min-h-[220px] text-slate-400">
        {logs.map((log, index) => {
          const isSuccess = log.includes("[CONNECTED]") || log.includes("OK") || log.includes("Online");
          return (
            <div key={index} className="flex items-start gap-2 animate-fade-in">
              <span className="text-neon-violet select-none">&gt;</span>
              <span className={isSuccess ? "text-toxic-green" : "text-slate-300"}>{log}</span>
            </div>
          );
        })}
        {currentIndex < BOOT_LOGS.length && (
          <div className="flex items-center gap-1">
            <span className="text-neon-violet">&gt;</span>
            <span className="w-2 h-4 bg-neon-violet animate-pulse" />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center px-4 py-2 border-t border-white/5 bg-black/20 text-[9px] text-slate-600">
        <span>MEM_ALLOC: 412.8 KB</span>
        <span>LATENCY: ~4.82ms</span>
      </div>
    </div>
  );
}
