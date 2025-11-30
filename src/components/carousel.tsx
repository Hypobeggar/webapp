import React, { useEffect, useRef, useState } from 'react'

type CarouselProps = {
  images?: string[]
  intervalMs?: number
  className?: string
}

export default function Carousel({ images, intervalMs = 5000, className, children }: CarouselProps & { children?: React.ReactNode }) {
  const [index, setIndex] = useState(0)
  const paused = useRef(false)
  const ref = useRef<HTMLDivElement | null>(null)

  const slideCount = children ? React.Children.count(children) : (images ? images.length : 0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + slideCount) % slideCount)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % slideCount)
    }

    node.addEventListener('keydown', onKey)
    return () => node.removeEventListener('keydown', onKey)
  }, [slideCount])

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current && slideCount > 0) setIndex((i) => (i + 1) % slideCount)
    }, intervalMs)
    return () => clearInterval(id)
  }, [slideCount, intervalMs])



  return (
    <div
      id="carousel"
      ref={ref}
      className={`mt-2 ${className ?? ''}`}
      tabIndex={0}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Portfolio carousel"
    >
      <button
        id="caraLeft"
        className="caraButtons no-print"
        type="button"
        aria-label="Previous"
        onClick={() => setIndex((i) => (i - 1 + slideCount) % slideCount)}
      >
        &lt;
      </button>

      {children ? (
        <div data-slot="carousel-item" className="w-full">
          {React.Children.toArray(children)[index as number]}
        </div>
      ) : (
        <img id="carousel-img" src={images?.[index]} alt={`Portfolio image ${index + 1}`} />
      )}

      <button
        id="caraRight"
        className="caraButtons no-print"
        type="button"
        aria-label="Next"
        onClick={() => setIndex((i) => (i + 1) % slideCount)}
      >
        &gt;
      </button>
    </div>
  )
}
