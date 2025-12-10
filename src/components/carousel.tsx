import React, { useEffect, useRef, useState } from 'react'
import styles from '../assets/Carousel.module.css'
type CarouselProps = {
  images?: string[]
  intervalMs?: number
  className?: string
}

export default function Carousel({ images, intervalMs = 5000, children }: CarouselProps & { children?: React.ReactNode }) {
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
      ref={ref}
      className={`${styles.carousel}`}
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
        className={`${styles.caraButtons}`}
        type="button"
        aria-label="Previous"
        onClick={() => setIndex((i) => (i - 1 + slideCount) % slideCount)}
      >
        &lt;
      </button>

      <div className={`${styles.carouselContent}`}>
        <div
          className={`${styles.carouselInner}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {children ? (
            React.Children.toArray(children).map((child, i) => (
              <div key={i} className={`${styles.carouselSlide}`}>
                {child}
              </div>
            ))
          ) : (
            images?.map((img, i) => (
              <div key={i} className={`${styles.carouselSlide}`}>
                <img src={img} alt={`Portfolio image ${i + 1}`} className={`${styles.carouselImg}`} />
              </div>
            ))
          )}
        </div>
      </div>

      <button
        className={`${styles.caraButtons}`}
        type="button"
        aria-label="Next"
        onClick={() => setIndex((i) => (i + 1) % slideCount)}
      >
        &gt;
      </button>
    </div>
  )
}
