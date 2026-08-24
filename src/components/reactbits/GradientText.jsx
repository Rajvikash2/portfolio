export default function GradientText({ children, className = '', colors = ['#89F336', '#c8f7a8', '#89F336'] }) {
  const gradient = `linear-gradient(90deg, ${colors.join(', ')})`;
  return (
    <span
      className={`bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_4s_linear_infinite] ${className}`}
      style={{ backgroundImage: gradient }}
    >
      {children}
    </span>
  );
}