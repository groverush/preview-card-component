import { useEffect, useState } from "react"
import imageMob from "../assets/images/image-product-mobile.jpg"
import imageDesk from "../assets/images/image-product-desktop.jpg"
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  let imageHero = isMobile ? imageMob : imageDesk
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 767.9px)")

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <div className="md:w-[50%]">
      <img
        src={imageHero}
        alt="product-image"
        className="rounded-t-xl md:h-full md:rounded-l-xl md:rounded-tr-none"
      />
    </div>
  )
}
export default Hero
