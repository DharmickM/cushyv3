'use client'

import { useEffect, useRef } from 'react'

interface SplineViewerProps {
  url: string
}

export default function SplineViewer({ url }: SplineViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js'
    script.type = 'module'
    document.body.appendChild(script)

    script.onload = () => {
      if (viewerRef.current) {
        const viewer = document.createElement('spline-viewer')
        viewer.setAttribute('url', url)
        viewerRef.current.appendChild(viewer)
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [url])

  return <div ref={viewerRef}></div>
}

