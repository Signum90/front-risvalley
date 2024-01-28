import { useEffect, useRef } from "react";
import gsap from "gsap";

const CarrouselText = () => {
  const items = [
    { content: 'Innovative', dot: '.' },
    { content: 'Empowering', dot: '.' },
    { content: 'Revolutionizing', dot: '.' },
  ];

  // Duplica los elementos para lograr una transición continua y dar un mejor efecto
  const duplicatedItems = [...items, ...items, ...items, ...items];

  const containerRef = useRef(null)

  useEffect(() => {

    const tl = gsap.timeline({ repeat: -1, yoyo: false });

    tl.fromTo(
      containerRef.current,
      { x: "0%" },
      { x: `-${100 * items.length}%`, duration: 15 * items.length, ease: "linear" }
    )

  }, [items.length])

  return (
    <section className="overflow-hidden">
      <div ref={containerRef} className="flex gap-24 text-[180px]">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="item font-r text-white flex gap-12">
            <h3 style={{ WebkitTextStroke: "2px white", color: "black" }}>
              {item.content}
            </h3>
            <span style={{ WebkitTextStroke: "2px white", color: "black" }} className="dot">{item.dot}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarrouselText;
