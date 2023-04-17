export default function BaseBtn({ className, message, backgroundColor }) {
  return (
    <button style={{ backgroundColor: backgroundColor }} className={className}>
      {message}
    </button>
  );
}
