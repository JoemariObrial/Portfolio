import React from "react";

export default function Marquee({
  children,
  reverse = false,
  duration = "20s",
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex whitespace-nowrap animate-marquee${
          reverse ? "-reverse" : ""
        }`}
        style={{ "--duration": duration }}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse var(--duration) linear infinite;
        }
      `}</style>
    </div>
  );
}
