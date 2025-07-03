'use client';

export const NeuralNetwork = ({ className = "" }) => (
  <svg className={`absolute inset-0 h-full w-full ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="neural" width="200" height="200" patternUnits="userSpaceOnUse">
        {/* Nodes */}
        <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.3"/>
        <circle cx="150" cy="50" r="4" fill="currentColor" opacity="0.3"/>
        <circle cx="100" cy="100" r="5" fill="currentColor" opacity="0.4"/>
        <circle cx="50" cy="150" r="4" fill="currentColor" opacity="0.3"/>
        <circle cx="150" cy="150" r="4" fill="currentColor" opacity="0.3"/>
        
        {/* Connections */}
        <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
        <line x1="150" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
        <line x1="50" y1="150" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
        <line x1="150" y1="150" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
        <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="0.3" opacity="0.1"/>
        <line x1="50" y1="150" x2="150" y2="150" stroke="currentColor" strokeWidth="0.3" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#neural)" />
  </svg>
);

export const AICircuitBoard = ({ className = "" }) => (
  <svg className={`absolute inset-0 h-full w-full ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ai-circuit" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
        {/* CPU/GPU chip */}
        <rect x="50" y="50" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
        <rect x="60" y="60" width="30" height="30" fill="currentColor" opacity="0.1"/>
        
        {/* Circuit paths */}
        <path d="M25,75 L50,75 M100,75 L125,75" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
        <path d="M75,25 L75,50 M75,100 L75,125" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
        
        {/* Connection points */}
        <circle cx="25" cy="75" r="2" fill="currentColor" opacity="0.3"/>
        <circle cx="125" cy="75" r="2" fill="currentColor" opacity="0.3"/>
        <circle cx="75" cy="25" r="2" fill="currentColor" opacity="0.3"/>
        <circle cx="75" cy="125" r="2" fill="currentColor" opacity="0.3"/>
        
        {/* Data flow indicators */}
        <circle cx="40" cy="75" r="1" fill="currentColor" opacity="0.5" className="animate-pulse"/>
        <circle cx="110" cy="75" r="1" fill="currentColor" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ai-circuit)" />
  </svg>
);

export const DataFlow = ({ className = "" }) => (
  <svg className={`absolute inset-0 h-full w-full ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dataflow" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" strokeDasharray="2,2"/>
        <path d="M10,25 Q30,5 50,25 T90,25" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.1" strokeDasharray="2,2"/>
        <path d="M10,75 Q30,55 50,75 T90,75" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.1" strokeDasharray="2,2"/>
        
        {/* Data packets */}
        <rect x="20" y="48" width="4" height="4" fill="currentColor" opacity="0.4" className="animate-pulse"/>
        <rect x="70" y="23" width="4" height="4" fill="currentColor" opacity="0.3" className="animate-pulse" style={{animationDelay: '1s'}}/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dataflow)" />
  </svg>
);

export const AIAgentPattern = ({ className = "" }) => (
  <svg className={`absolute inset-0 h-full w-full ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ai-agents" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
        {/* Agent nodes */}
        <g transform="translate(90, 90)">
          {/* Central AI core */}
          <circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <circle cx="0" cy="0" r="8" fill="currentColor" opacity="0.2"/>
          
          {/* Satellite agents */}
          <circle cx="-40" cy="-40" r="8" fill="currentColor" opacity="0.15"/>
          <circle cx="40" cy="-40" r="8" fill="currentColor" opacity="0.15"/>
          <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.15"/>
          <circle cx="-40" cy="40" r="8" fill="currentColor" opacity="0.15"/>
          
          {/* Communication lines */}
          <line x1="0" y1="0" x2="-40" y2="-40" stroke="currentColor" strokeWidth="0.5" opacity="0.1" strokeDasharray="3,3"/>
          <line x1="0" y1="0" x2="40" y2="-40" stroke="currentColor" strokeWidth="0.5" opacity="0.1" strokeDasharray="3,3"/>
          <line x1="0" y1="0" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.1" strokeDasharray="3,3"/>
          <line x1="0" y1="0" x2="-40" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.1" strokeDasharray="3,3"/>
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ai-agents)" />
  </svg>
);

export const MatrixRain = ({ className = "" }) => (
  <svg className={`absolute inset-0 h-full w-full ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="matrix" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <text x="5" y="10" fontFamily="monospace" fontSize="10" fill="currentColor" opacity="0.2">0</text>
        <text x="20" y="20" fontFamily="monospace" fontSize="10" fill="currentColor" opacity="0.15">1</text>
        <text x="10" y="30" fontFamily="monospace" fontSize="10" fill="currentColor" opacity="0.1">1</text>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#matrix)" />
  </svg>
);

export const QuantumDots = ({ className = "" }) => (
  <svg className={`absolute inset-0 h-full w-full ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="quantum" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.3" className="animate-pulse"/>
        <circle cx="25" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
        <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.05"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#quantum)" />
  </svg>
);

export const AICodeBackground = ({ className = "" }) => (
  <svg className={`absolute inset-0 h-full w-full ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ai-code" x="0" y="0" width="250" height="120" patternUnits="userSpaceOnUse">
        <text x="10" y="20" fontFamily="monospace" fontSize="12" fill="currentColor" opacity="0.1">class AIAgent:</text>
        <text x="10" y="40" fontFamily="monospace" fontSize="12" fill="currentColor" opacity="0.08">  def think(self):</text>
        <text x="30" y="60" fontFamily="monospace" fontSize="12" fill="currentColor" opacity="0.06">return neural_network.process()</text>
        <text x="10" y="80" fontFamily="monospace" fontSize="12" fill="currentColor" opacity="0.08">  def learn(self, data):</text>
        <text x="30" y="100" fontFamily="monospace" fontSize="12" fill="currentColor" opacity="0.05">self.model.train(data)</text>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ai-code)" />
  </svg>
);

export const FloatingAIOrbs = ({ className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
    <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
  </div>
);

export const BrainNetwork = ({ className = "" }) => (
  <svg className={`absolute inset-0 h-full w-full ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
    <g opacity="0.1">
      {/* Brain outline */}
      <path d="M500,200 Q600,150 650,250 T600,400 Q550,450 500,400 Q450,450 400,400 Q350,350 350,250 Q400,150 500,200" 
            fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
      
      {/* Neural connections */}
      <circle cx="500" cy="300" r="5" fill="currentColor" opacity="0.4"/>
      <circle cx="450" cy="280" r="4" fill="currentColor" opacity="0.3"/>
      <circle cx="550" cy="280" r="4" fill="currentColor" opacity="0.3"/>
      <circle cx="480" cy="350" r="4" fill="currentColor" opacity="0.3"/>
      <circle cx="520" cy="350" r="4" fill="currentColor" opacity="0.3"/>
      
      <line x1="500" y1="300" x2="450" y2="280" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <line x1="500" y1="300" x2="550" y2="280" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <line x1="500" y1="300" x2="480" y2="350" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <line x1="500" y1="300" x2="520" y2="350" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    </g>
  </svg>
);