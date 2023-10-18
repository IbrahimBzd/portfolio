import * as React from 'react';

export function ElementOnScreenAnimation({
  children,
  transition = '900ms ease-in-out',
  translate = '6rem 0rem',
}: {
  children: JSX.Element;
  transition?: string;
  translate?: string;
}) {
  // on scroll animation
  function useElementOnScreen(
    ref: React.RefObject<Element>,
    rootMargin = '0px',
  ) {
    const [isIntersecting, setIsIntersecting] = React.useState(true);
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin },
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
    return isIntersecting;
  }

  const ref = React.useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? 'none' : translate,
        transition,
      }}
    >
      {children}
    </div>
  );
}
