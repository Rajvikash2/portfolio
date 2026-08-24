import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SplitText({ text, className = '', delay = 0.03, from = { opacity: 0, y: 40 } }) {
  const ref = useRef(null);

  useEffect(() => {
    const chars = ref.current.querySelectorAll('.char');
    gsap.fromTo(
      chars,
      from,
      { opacity: 1, y: 0, duration: 0.6, stagger: delay, ease: 'power3.out' }
    );
  }, []);

  return (
    <span ref={ref} className={className}>
      {text.split('').map((c, i) => (
        <span key={i} className="char inline-block">{c === ' ' ? '\u00A0' : c}</span>
      ))}
    </span>
  );
}