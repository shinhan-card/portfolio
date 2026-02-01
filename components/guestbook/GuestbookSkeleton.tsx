export default function GuestbookSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="p-6 bg-surface2/50 rounded-lg border border-border relative overflow-hidden">
          {/* Background emoji */}
          <div className="absolute top-2 right-2 text-4xl opacity-[0.02] pointer-events-none">
            💬
          </div>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-muted2/20 rounded-full flex items-center justify-center text-lg">
              👤
            </div>
            <div className="flex-1">
              <div className="h-4 w-24 bg-muted2/20 rounded mb-2" />
              <div className="h-3 w-32 bg-muted2/10 rounded" />
            </div>
          </div>
          <div className="space-y-2 pl-13">
            <div className="h-3 w-full bg-muted2/10 rounded" />
            <div className="h-3 w-5/6 bg-muted2/10 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
