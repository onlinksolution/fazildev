"use client"
import { Snowfall } from "react-snowfall"

const SnowAnimation = () => {
  return (
    <div>
      <Snowfall
        speed={[1, 0]}
        opacity={[1, 2]}
        snowflakeCount={60}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: '100'
        }}
      />
    </div>
  )
}

export default SnowAnimation