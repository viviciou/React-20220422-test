import { useEffect, useState } from 'react';
// https://www.letswrite.tw/intersection-oserver-demo/

function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect( () => {
        // if(ref instanceof Object) {
        //     observer.observe(ref.current)   //單筆
        // }else {
        //     console.log('useOnScreen ref',ref)
        //     observer.observe(ref)           //多筆
        // }
        observer.observe(ref.current) 

        return () => {
            observer.disconnect()
        }
    }, [])

    return isIntersecting
}
export default useOnScreen;