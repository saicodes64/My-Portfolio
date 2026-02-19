import LightPillar from './LightPillar'

function BitsBg() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <LightPillar
        topColor="#00c7fc"
        bottomColor="#7b219f"
        intensity={0.5}
        rotationSpeed={0.3}
        glowAmount={0.002}
        pillarWidth={3.5}
        pillarHeight={0.5}
        noiseIntensity={0.5}
        pillarRotation={25}
        interactive={false}
        mixBlendMode="screen"
        quality="high"
      />
    </div>
  )
}

export default BitsBg