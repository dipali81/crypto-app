import React from 'react'

function Crypto() {
    return (
        <div>
            <div className="flex h-150 w-full items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-black">
                <div className="absolute h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl"></div>
                <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-linear-to-br from-slate-800 via-slate-900 to-black shadow-[0_0_60px_rgba(59,130,246,0.6)]">
                    <div className="absolute h-full w-full animate-spin rounded-full border-8 border-blue-500 border-t-cyan-300 border-b-purple-500"></div>
                    <div className="absolute h-[90%] w-[90%] animate-[spin_8s_linear_reverse_infinite] rounded-full border-[6px] border-cyan-500 border-r-transparent border-l-transparent"></div>
                    <div className="absolute h-[80%] w-[80%] rounded-full border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.7)]"></div>
                    <div className="absolute h-[70%] w-[70%] rounded-full border border-cyan-300/40"></div>
                    <div className="absolute h-[60%] w-[60%] rounded-full border border-purple-400/40"></div>
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-yellow-300 via-yellow-500 to-amber-700 shadow-[0_0_40px_rgba(255,215,0,0.8)]">
                        <div className="absolute top-3 left-4 h-5 w-10 rounded-full bg-white/40 blur-sm"></div>
                        <span className="text-5xl font-black text-slate-900 drop-shadow-lg"> ₿ </span>
                    </div>
                    <div className="absolute top-5 left-10 h-2 w-2 animate-ping rounded-full bg-cyan-400"></div>
                    <div className="absolute right-12 bottom-8 h-2 w-2 animate-ping rounded-full bg-purple-400"></div>
                    <div className="absolute top-12 right-5 h-1 w-1 animate-pulse rounded-full bg-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Crypto