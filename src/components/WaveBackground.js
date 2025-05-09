export default function WaveBackground({ children }) {
    return (
      <div className="relative overflow-hidden bg-[#08020f]">
        {/* 1️⃣ SVG Waves */}
        <svg
          viewBox="0 0 1440 600"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8A2BE2" />
              <stop offset="40%" stopColor="#1E90FF" />
              <stop offset="60%" stopColor="#FF4E50" />
              <stop offset="100%" stopColor="#FF9500" />
            </linearGradient>
          </defs>
          {/* Layer 1 */}
          <path
            d="M0,320 C360,400 720,240 1440,320 L1440,600 L0,600 Z"
            fill="url(#waveGradient)"
            opacity="0.6"
          />
          {/* Layer 2 */}
          <path
            d="M0,360 C360,300 720,440 1440,360 L1440,600 L0,600 Z"
            fill="url(#waveGradient)"
            opacity="0.4"
          />
          {/* Layer 3 */}
          <path
            d="M0,400 C360,480 720,320 1440,400 L1440,600 L0,600 Z"
            fill="url(#waveGradient)"
            opacity="0.8"
          />
        </svg>
  
        {/* 2️⃣ Your page content goes here, above the waves */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
  