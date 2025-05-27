export default function EmptyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-4 w-full">
        {children}
      </main>
    </div>
  );
}
