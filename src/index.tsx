import React, { useEffect } from 'react'
import { useResizeObserver } from 'react-use-observer'
import type { PropsWithChildren } from 'react'

interface Props {
  additional: number
}

export const CanvasLTIAutoResizer = ({
  additional = 0,
  children
}: PropsWithChildren<Props>) => {
  const [ref, resizeObserverEntry] = useResizeObserver()

  useEffect(() => {
    if (resizeObserverEntry.contentRect) {
      const offset = resizeObserverEntry.contentRect.height + additional
      parent.postMessage(
        `{"subject":"lti.frameResize", "height": ${offset}}`,
        '*'
      )
    }
  }, [resizeObserverEntry])

  return <div ref={ref}>{children}</div>
}
