export function PageWrapper({ children }) {
    return (
        <div className="min-h-dvh bg-linear-to-b from-cyan-200 to-white to-[60vh]">
            {children}
        </div>
    )
}