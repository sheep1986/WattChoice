/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Comprehensive safelist to prevent runtime classList.add() errors
    
    // All gradient directions
    'bg-gradient-to-r', 'bg-gradient-to-l', 'bg-gradient-to-t', 'bg-gradient-to-b',
    'bg-gradient-to-br', 'bg-gradient-to-bl', 'bg-gradient-to-tr', 'bg-gradient-to-tl',
    
    // All gradient from/to colors (standard palette)
    'from-emerald-500', 'to-green-600', 'from-green-500', 'to-emerald-600',
    'from-blue-500', 'to-cyan-600', 'from-indigo-500', 'to-purple-600',
    'from-purple-500', 'to-pink-600', 'from-amber-500', 'to-orange-600',
    'from-red-500', 'to-rose-600', 'from-gray-500', 'to-gray-600',
    'from-slate-500', 'to-slate-600', 'from-cyan-500', 'to-blue-600',
    'from-yellow-500', 'to-amber-600', 'from-lime-500', 'to-green-600',
    'from-teal-500', 'to-cyan-600', 'from-orange-500', 'to-red-600',
    'from-pink-500', 'to-rose-600', 'from-violet-500', 'to-purple-600',
    
    // 600-700 range for darker gradients
    'from-emerald-600', 'to-green-700', 'from-green-600', 'to-emerald-700',
    'from-blue-600', 'to-cyan-700', 'from-indigo-600', 'to-purple-700',
    'from-purple-600', 'to-pink-700', 'from-amber-600', 'to-orange-700',
    'from-red-600', 'to-rose-700', 'from-gray-600', 'to-gray-700',
    'from-slate-600', 'to-slate-700', 'from-cyan-600', 'to-blue-700',
    
    // Opacity variants commonly used
    'from-emerald-500/10', 'to-green-600/10', 'from-emerald-500/20', 'to-green-600/20',
    'from-emerald-500/30', 'to-green-600/30', 'from-blue-500/10', 'to-cyan-600/10',
    'from-blue-500/20', 'to-cyan-600/20', 'from-blue-500/30', 'to-cyan-600/30',
    'from-purple-500/10', 'to-pink-600/10', 'from-purple-500/20', 'to-pink-600/20',
    'from-purple-500/30', 'to-pink-600/30', 'from-amber-500/10', 'to-orange-600/10',
    'from-amber-500/20', 'to-orange-600/20', 'from-amber-500/30', 'to-orange-600/30',
    
    // Text gradient classes
    'bg-clip-text', 'text-transparent',
    
    // Border gradient classes that might be dynamically applied
    'border-emerald-500', 'border-green-600', 'border-blue-500', 'border-cyan-600',
    'border-purple-500', 'border-pink-600', 'border-amber-500', 'border-orange-600',
    'border-emerald-500/50', 'border-green-600/50', 'border-blue-500/50',
    
    // Ring classes that might be applied dynamically
    'ring-emerald-500', 'ring-green-600', 'ring-blue-500', 'ring-cyan-600',
    'ring-purple-500', 'ring-pink-600', 'ring-amber-500', 'ring-orange-600',
    
    // Common utility classes that might be added dynamically
    'opacity-0', 'opacity-100', 'transition-opacity', 'transition-all',
    'duration-300', 'duration-500', 'hover:opacity-100', 'group-hover:opacity-100',
    
    // Safeguard: Include pattern-based selectors
    {
      pattern: /bg-gradient-to-(r|l|t|b|br|bl|tr|tl)/,
    },
    {
      pattern: /from-(emerald|green|blue|cyan|purple|pink|amber|orange|red|rose|gray|slate)-(500|600|700)/,
    },
    {
      pattern: /to-(emerald|green|blue|cyan|purple|pink|amber|orange|red|rose|gray|slate)-(500|600|700)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}