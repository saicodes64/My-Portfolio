import FloatingLines from './FloatingLines'

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
        opacity: 0.14,
      }}
    >
      <FloatingLines
        linesGradient={["#00c7fc", "#2F4BC0", "#E945F5"]}
        animationSpeed={1}
        interactive
        bendRadius={5}
        bendStrength={-0.5}
        mouseDamping={0.05}
        parallax
        parallaxStrength={0.2}
      />
    </div>
  )
}

export default BitsBg