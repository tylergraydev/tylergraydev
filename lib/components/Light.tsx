import { useEffect, useState } from "react";
import LightSource from "./LightSource";

export default function Light() {
  const [size, setSize] = useState(400);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX - size / 2;
      const y = event.clientY - size / 2;
      setCoords({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseScroll = (event: WheelEvent) => {
      console.log(event);
      event.preventDefault();
      setSize((prevSize) => Math.max(100, prevSize + event.deltaY * -0.1));
    };

    window.addEventListener("wheel", handleMouseScroll, { passive: false });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleMouseScroll);
    };
  });
  return <LightSource size={size} coords={coords} />;
}
