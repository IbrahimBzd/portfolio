import * as React from 'react';
import './styles.scss';

function BlackWhole() {
  const [scrollY, setScrollY] = React.useState<number>(0);

  React.useEffect(() => {
    const onScroll = (e) => {
      setScrollY(Math.trunc(e.target.documentElement.scrollTop));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  const viewWidth = window.innerWidth;

  function bottomDistanceFn() {
    if (viewWidth > 1280) {
      return window.innerHeight / 1.45;
    }
    if (viewWidth > 768) {
      return window.innerHeight / 1.7;
    }
    return window.innerHeight / 1.6;
  }

  function rightDistance() {
    if (viewWidth > 1280) return window.innerWidth / 1.55;
    return window.innerWidth / 1.4;
  }

  function widthHeightFn() {
    if (viewWidth > 1280) return 1000;
    if (viewWidth > 768) return 700;
    return 600;
  }

  return (
    <div
      className="-z-10 fixed black-whole"
      style={{
        bottom:
          bottomDistanceFn() - scrollY / 3 < -window.innerHeight
            ? -window.innerWidth
            : bottomDistanceFn() - scrollY / 3,
        right:
          rightDistance() - scrollY < -window.innerWidth
            ? -window.innerWidth
            : rightDistance() - scrollY,
        width: `${widthHeightFn() - scrollY}px`,
        height: `${widthHeightFn() - scrollY}px`,
      }}
    />
  );
}

export default BlackWhole;
