import { useState, useEffect } from 'react';

/**
 * Temporary debug component to show viewport size and active breakpoints
 * Add this to App.tsx temporarily to debug responsive design
 * 
 * Usage: <DebugViewport />
 */
export function DebugViewport() {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreakpoint = () => {
    const width = viewport.width;
    if (width >= 1536) return { name: '2xl', color: 'bg-purple-500' };
    if (width >= 1280) return { name: 'xl', color: 'bg-blue-500' };
    if (width >= 1024) return { name: 'lg', color: 'bg-green-500' };
    if (width >= 768) return { name: 'md', color: 'bg-yellow-500' };
    if (width >= 640) return { name: 'sm', color: 'bg-orange-500' };
    return { name: 'default', color: 'bg-red-500' };
  };

  const breakpoint = getBreakpoint();

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/90 border-2 border-yellow-400 rounded-lg p-4 text-white text-xs font-mono shadow-lg">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${breakpoint.color}`}></div>
          <span className="font-bold">Breakpoint: {breakpoint.name}</span>
        </div>
        <div>Width: <span className="text-yellow-400">{viewport.width}px</span></div>
        <div>Height: <span className="text-yellow-400">{viewport.height}px</span></div>
        <div className="pt-2 border-t border-gray-700">
          <div className="text-gray-400 text-[10px]">
            Tailwind Classes Active:
          </div>
          <div className="mt-1 space-y-0.5">
            {viewport.width >= 640 && <div className="text-green-400">✓ sm: (≥640px)</div>}
            {viewport.width >= 768 && <div className="text-green-400">✓ md: (≥768px)</div>}
            {viewport.width >= 1024 && <div className="text-green-400">✓ lg: (≥1024px)</div>}
            {viewport.width >= 1280 && <div className="text-green-400">✓ xl: (≥1280px)</div>}
            {viewport.width >= 1536 && <div className="text-green-400">✓ 2xl: (≥1536px)</div>}
            {viewport.width < 640 && <div className="text-gray-500">Default: (&lt;640px)</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

