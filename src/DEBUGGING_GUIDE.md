# Debugging Mobile & Desktop Views - Quick Guide

## Method 1: Browser DevTools (Recommended)

### Chrome/Edge DevTools:
1. **Open DevTools**: Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
2. **Toggle Device Toolbar**: Press `Ctrl+Shift+M` (Windows) / `Cmd+Shift+M` (Mac)
   - Or click the device icon in the toolbar
3. **Select Device Presets**:
   - Click the device dropdown (top-left)
   - Choose: iPhone 12/13/14, Samsung Galaxy, iPad, etc.
4. **Custom Dimensions**:
   - Click "Edit" next to device dropdown
   - Add custom sizes (e.g., 375x667 for iPhone SE)
5. **Test Breakpoints**:
   - Resize the viewport manually
   - Watch for Tailwind breakpoints:
     - Mobile: < 768px (default)
     - Tablet: md: ≥ 768px
     - Desktop: lg: ≥ 1024px
     - XL: xl: ≥ 1280px

### Firefox DevTools:
1. Press `F12` to open DevTools
2. Click the responsive design icon (or press `Ctrl+Shift+M`)
3. Select device presets or enter custom dimensions

### Safari DevTools:
1. Enable Developer menu: Safari → Preferences → Advanced → "Show Develop menu"
2. Develop → Enter Responsive Design Mode
3. Select device from dropdown

## Method 2: Viewport Size Indicator

Add a temporary debug component (see `DebugViewport.tsx`) that shows:
- Current viewport width/height
- Active Tailwind breakpoint
- Logo dimensions in real-time

## Method 3: Console Logging

Add this to your component temporarily:
```javascript
useEffect(() => {
  const handleResize = () => {
    console.log('Viewport:', window.innerWidth, 'x', window.innerHeight);
    console.log('Breakpoint:', 
      window.innerWidth >= 1280 ? 'xl' :
      window.innerWidth >= 1024 ? 'lg' :
      window.innerWidth >= 768 ? 'md' : 'sm'
    );
  };
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

## Method 4: Visual Breakpoint Indicators

Add colored borders to see active breakpoints:
- Red border = Mobile (< 768px)
- Yellow border = Tablet (768px - 1023px)
- Green border = Desktop (≥ 1024px)

## Method 5: Test on Real Devices

1. **Find your local IP**:
   - Windows: `ipconfig` → Look for IPv4 Address
   - Mac/Linux: `ifconfig` or `ip addr`
2. **Start dev server** (if not already):
   ```bash
   npm run dev
   ```
3. **Access from phone**:
   - Make sure phone is on same WiFi
   - Open browser on phone: `http://YOUR_IP:5173` (or your dev port)
4. **Use Chrome Remote Debugging**:
   - Connect phone via USB
   - Chrome → `chrome://inspect` → Enable USB debugging

## Tailwind Breakpoints Reference

- **sm**: 640px and up
- **md**: 768px and up (tablets)
- **lg**: 1024px and up (desktops)
- **xl**: 1280px and up (large desktops)
- **2xl**: 1536px and up

## Quick Testing Checklist

- [ ] Test at 375px (iPhone SE)
- [ ] Test at 414px (iPhone 11/12)
- [ ] Test at 768px (iPad portrait)
- [ ] Test at 1024px (iPad landscape / small desktop)
- [ ] Test at 1920px (Full HD desktop)

## Common Issues to Check

1. **Logo sizes**: Are they readable on mobile?
2. **Text overflow**: Does text wrap properly?
3. **Touch targets**: Are buttons/links at least 44x44px?
4. **Horizontal scroll**: Is there unwanted horizontal scrolling?
5. **Images**: Do images scale properly?
6. **Spacing**: Is padding/margin appropriate for small screens?

