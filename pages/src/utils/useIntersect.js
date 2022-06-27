// https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E8%AA%8D%E8%AD%98-intersection-observer-api-%E5%AF%A6%E4%BD%9C-lazy-loading-%E5%92%8C-infinite-scroll-c8d434ad218c
// https://mini-ghost.dev/blog/api-intersection-oserver/
// https://non-traditional.dev/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

import { useRef, useEffect, useState, memo } from "react";

const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      // 條件達成做什麼：符合設定條件下，目標進入或離開 viewport 時觸發此 callback 函式
      ([entry]) => setEntry(entry),
      // 響鈴條件：設定和控制在哪些情況下，呼叫 callback 函式
      {
        root,
        rootMargin,
        threshold
      }
    );
    // 製作鈴鐺：建立一個 intersection observer，帶入相關設定資訊
    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
};

export default memo(useIntersect);
