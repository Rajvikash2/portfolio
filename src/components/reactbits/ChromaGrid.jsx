import { useRef } from 'react';

function ChromaCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-[#89F336]/15 bg-[#0d0d0d] p-6 overflow-hidden transition-colors duration-300 hover:border-[#89F336]/50"
      style={{ '--mx': '50%', '--my': '50%' }}
    >
      {/* Spotlight glow that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at var(--mx) var(--my), rgba(137,243,54,0.12), transparent 70%)`,
        }}
      />
      {/* Chroma border trace */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(200px circle at var(--mx) var(--my), rgba(137,243,54,0.5), transparent 70%)`,
          WebkitMaskImage: 'linear-gradient(#000, #000)',
          padding: '1px',
          maskComposite: 'exclude',
        }}
      />

      <div className="relative z-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#89F336] mb-3">
          {item.tag}
        </span>
        <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

        <div className="mb-2">
          <p className="text-xs font-semibold text-[#89F336]/80 uppercase tracking-wide mb-1">
            The hard part
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">{item.challenge}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {item.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-full border border-[#89F336]/20 text-gray-400"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ChromaGrid({ items }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ChromaCard key={item.id} item={item} />
      ))}
    </div>
  );
}