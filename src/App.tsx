import './App.css'
import LaserFlow from '@/components/LaserFlow.jsx'

function App() {

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <LaserFlow
        color="#e63b7a"
        wispDensity={1}
        flowSpeed={0.35}
        verticalSizing={2}
        horizontalSizing={0.5}
        fogIntensity={0.5}
        fogScale={0.3}
        wispSpeed={10}
        wispIntensity={10.5}
        flowStrength={0.5}
        decay={3}
        horizontalBeamOffset={0.3}
        verticalBeamOffset={-0.5}
      />
    </div>
  )
}

export default App
