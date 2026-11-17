import { useRef, useState } from "react";

/** Single accordion row. */
export default function FaqItem({ q, a }) {
  const answerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    setHeight(next && answerRef.current ? answerRef.current.scrollHeight : 0);
  };

  return (
    <div className={`faq-item reveal${open ? " open" : ""}`}>
      <button className="faq-q" aria-expanded={open} onClick={toggle}>
        {q}
        <span>+</span>
      </button>
      <div className="faq-a" ref={answerRef} style={{ maxHeight: height + "px" }}>
        <p>{a}</p>
      </div>
    </div>
  );
}
