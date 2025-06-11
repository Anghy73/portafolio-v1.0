import { ReactLenis, useLenis } from 'lenis/react'

function ScrollAnimation() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  return (
    <>
      <ReactLenis root />
      {/* <div>ScrollAnimation</div> */}
      { /* content */}
    </>
  )
}

export default ScrollAnimation

