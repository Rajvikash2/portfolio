export default function LaserFlow({ color = '#89F336', height = 2 }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
      {/* base faint line */}
      <div className="absolute inset-0" style={{ background: `${color}22` }} />

      {/* traveling laser pulse */}
      <div
        className="absolute inset-y-0 w-1/3 laser-flow-beam"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          boxShadow: `0 0 12px ${color}, 0 0 24px ${color}99`,
        }}
      />

      <style>{`
        @keyframes laserFlowMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .laser-flow-beam {
          animation: laserFlowMove 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}