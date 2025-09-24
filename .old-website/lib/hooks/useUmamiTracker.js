import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useUmamiTracker = () => {
  const router = useRouter()

  useEffect(() => {
    const umamiScript = document.createElement('script')
    umamiScript.src = 'https://cloud.umami.is/script.js'
    umamiScript.async = true
    umamiScript.setAttribute('data-website-id', '5acef769-79ea-4ee1-b812-15a2e9fc5dff')
    document.body.appendChild(umamiScript)

    router.events.on('routeChangeComplete', () => {
      if (window.umami) {
        // You can add logic here to track events on route change if needed
      }
    })

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(umamiScript)
      router.events.off('routeChangeComplete')
    }
  }, [router.asPath]) // Re-run the effect when the route changes
}

export default useUmamiTracker
