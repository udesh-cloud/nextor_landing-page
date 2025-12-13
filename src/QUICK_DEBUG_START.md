# Quick Start: Debug Mobile/Desktop Views

## 🚀 Fastest Method (Browser DevTools)

1. **Open your app** in browser (usually `http://localhost:5173`)
2. **Press `F12`** to open DevTools
3. **Press `Ctrl+Shift+M`** (Windows) or `Cmd+Shift+M` (Mac) to toggle device toolbar
4. **Select a device** from dropdown (iPhone 12, Galaxy S20, etc.)
5. **Resize manually** by dragging the edges to see breakpoints

## 📱 Using the Debug Component

### Step 1: Add DebugViewport to App.tsx

```tsx
// In App.tsx, add this import at the top:
import { DebugViewport } from './components/DebugViewport';

// Then add it inside your return statement (before closing </div>):
return (
  <div className="min-h-screen bg-[#0a0a0a] text-white">
    <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
    {/* ... rest of your components ... */}
    <DebugViewport /> {/* Add this line */}
  </div>
);
```

### Step 2: Test Different Sizes

- Resize your browser window
- Watch the debug panel in bottom-right corner
- See which Tailwind breakpoint is active
- Check viewport dimensions in real-time

## 🔍 Using Debug Mode for PartneredWith Component

### Option A: Use the debug version temporarily

```tsx
// In App.tsx, change:
import { PartneredWith } from './components/PartneredWith';
// To:
import { PartneredWith } from './components/PartneredWith.debug';

// Then add debug prop:
<PartneredWith title="Partnered With" debug={true} />
```

### Option B: Add debug to existing component

Add this to `PartneredWith.tsx`:

```tsx
// Add useState and useEffect imports
import { useState, useEffect } from 'react';

// Add debug prop to interface
interface PartneredWithProps {
  title?: string;
  debug?: boolean; // Add this
}

// Add debug state and effect inside component
export function PartneredWith({ title = 'Partnered With', debug = false }: PartneredWithProps) {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    if (!debug) return;
    const handleResize = () => {
      setViewport({ width: window.innerWidth });
      console.log('Viewport:', window.innerWidth, 'px');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [debug]);

  // ... rest of component
}
```

## 📏 Common Mobile Viewport Sizes

Test these specific widths:
- **375px** - iPhone SE / iPhone 12/13 mini
- **390px** - iPhone 12/13/14
- **414px** - iPhone 11 Pro Max / Plus models
- **428px** - iPhone 14 Pro Max
- **768px** - iPad Portrait
- **1024px** - iPad Landscape / Small Desktop

## 🎯 Quick Test Checklist

1. Open DevTools (`F12`)
2. Toggle device toolbar (`Ctrl+Shift+M`)
3. Test at **375px** width (mobile)
4. Test at **768px** width (tablet)
5. Test at **1024px** width (desktop)
6. Check if logos are visible and readable at each size

## 💡 Pro Tips

- **Use Chrome DevTools** - Best device emulation
- **Test in incognito** - Avoid extension interference
- **Clear cache** - `Ctrl+Shift+Delete` if styles seem stuck
- **Use Network throttling** - Simulate slow connections
- **Test touch events** - DevTools can simulate touch

## 🧹 Clean Up

When done debugging:
1. Remove `<DebugViewport />` from App.tsx
2. Remove `debug={true}` props
3. Delete debug files if you created them

