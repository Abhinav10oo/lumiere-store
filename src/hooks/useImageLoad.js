import { useEffect, useRef } from 'react'

function useImageLoad() {
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    if (img.complete) {
      img.classList.add('loaded')
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'))
    }
  }, [])

  return imgRef
}

export default useImageLoad