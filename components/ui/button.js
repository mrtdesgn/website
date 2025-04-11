
export function Button({ children, className }) {
  return <button className={`rounded-md px-4 py-2 font-medium ${className}`}>{children}</button>
}
