import { useEffect, useState } from 'react'

export default function LoadingScreen() {
    const [hidden, setHidden] = useState(false)
    const [gone, setGone] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setHidden(true)
            setTimeout(() => setGone(true), 500)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

    if (gone) return null

    return (
        <div className={`loading${hidden ? ' hidden' : ''}`} id="loading">
            <div className="loading-spinner"></div>
        </div>
    )
}
