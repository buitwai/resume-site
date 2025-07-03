export const GeometricPattern = ({ className = "" }) => (
  <svg
    className={`absolute inset-0 h-full w-full ${className}`}
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="geometric" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.1" />
        <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.1" />
        <rect x="7" y="7" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#geometric)" />
  </svg>
);

export const WavePattern = ({ className = "" }) => (
  <svg
    className={`absolute inset-0 h-full w-full ${className}`}
    viewBox="0 0 1000 100"
    preserveAspectRatio="none"
  >
    <path
      d="M0,50 Q250,10 500,50 T1000,50 V100 H0 Z"
      fill="currentColor"
      opacity="0.1"
    />
    <path
      d="M0,40 Q250,0 500,40 T1000,40 V100 H0 Z"
      fill="currentColor"
      opacity="0.05"
    />
  </svg>
);

export const CircuitPattern = ({ className = "" }) => (
  <svg
    className={`absolute inset-0 h-full w-full ${className}`}
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="circuit" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
        <path
          d="M12.5,0 L12.5,12.5 L25,12.5 M0,12.5 L12.5,12.5 M12.5,12.5 L12.5,25"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          opacity="0.1"
        />
        <circle cx="12.5" cy="12.5" r="1.5" fill="currentColor" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
);

export const HexagonPattern = ({ className = "" }) => (
  <svg
    className={`absolute inset-0 h-full w-full ${className}`}
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="hexagon" x="0" y="0" width="30" height="26" patternUnits="userSpaceOnUse">
        <polygon
          points="15,2 23,7 23,17 15,22 7,17 7,7"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagon)" />
  </svg>
);

export const FloatingElements = ({ className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <div className="absolute top-20 left-10 w-4 h-4 bg-primary-200 rounded-full opacity-30 animate-pulse" />
    <div className="absolute top-40 right-16 w-6 h-6 border-2 border-accent-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }} />
    <div className="absolute bottom-32 left-20 w-3 h-3 bg-secondary-300 rotate-45 opacity-25 animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-1/3 right-1/4 w-8 h-8 border border-primary-300 opacity-20 animate-spin" style={{ animationDuration: '8s' }} />
    <div className="absolute bottom-1/4 right-10 w-5 h-5 bg-accent-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }} />
  </div>
);