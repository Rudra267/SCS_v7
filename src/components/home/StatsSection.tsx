// import { useEffect, useMemo, useRef, useState } from "react";
// import { animate, motion, useInView } from "framer-motion";

// const stats = [
//   { value: "22", label: "States" },
//   { value: "248", label: "Cities" },
//   { value: "40", label: "Years" },
//   { value: "950", label: "Schools" },
//   { value: "55,000", label: "Staff" },
//   { value: "950,000", label: "Students" },
//   { value: "1,361,738", label: "Parents" },
// ];

// const parseStatValue = (value: string) => {
//   const match = value.trim().match(/^([\d,]+(?:\.\d+)?)(.*)$/);
//   if (!match) {
//     return { numeric: 0, suffix: value, decimals: 0 };
//   }

//   const numeric = Number(match[1].replace(/,/g, ""));
//   const suffix = match[2] ?? "";
//   const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;

//   return { numeric, suffix, decimals };
// };

// type StatCardProps = {
//   value: string;
//   label: string;
//   delay: number;
//   isInView: boolean;
// };

// const StatCard = ({ value, label, delay, isInView }: StatCardProps) => {
//   const { numeric, suffix, decimals } = useMemo(() => parseStatValue(value), [value]);
//   const [displayValue, setDisplayValue] = useState(0);

//   useEffect(() => {
//     if (!isInView) {
//       setDisplayValue(0);
//       return undefined;
//     }

//     const controls = animate(0, numeric, {
//       duration: 1.4,
//       ease: "easeOut",
//       delay,
//       onUpdate: (latest) => {
//         setDisplayValue(latest);
//       },
//     });

//     return () => controls.stop();
//   }, [delay, isInView, numeric]);

//   const formatter = new Intl.NumberFormat("en-US", {
//     minimumFractionDigits: decimals,
//     maximumFractionDigits: decimals,
//   });
//   const formattedValue = formatter.format(displayValue);

//   return (
//     <motion.div
//       className="impact-stat text-center"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.5 }}
//     >
//       <div className="impact-value">
//         {formattedValue}
//         {suffix}
//       </div>
//       <div className="impact-label">{label}</div>
//     </motion.div>
//   );
// };

// const StatsSection = () => {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

//   return (
//     <section ref={sectionRef} className="relative bg-background pt-20 pb-0">
//       <div className="container mx-auto px-6">
//         <motion.div
//           className="impact-strip"
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="impact-kicker">Sri Chaitanya Schools</p>
//           <div className="impact-stats">
//             {stats.map((stat, i) => (
//               <StatCard
//                 key={stat.label}
//                 value={stat.value}
//                 label={stat.label}
//                 delay={i * 0.08}
//                 isInView={isInView}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//       <div className="stats-outline-bottom" aria-hidden="true" />
//     </section>
//   );
// };

// export default StatsSection;



"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

const stats = [
  { value: "22", label: "States" },
  { value: "248", label: "Cities" },
  { value: "40", label: "Years" },
  { value: "950", label: "Schools" },
  { value: "55,000", label: "Staff" },
  { value: "950,000", label: "Students" },
  { value: "1,361,738", label: "Parents" },
];

const parseStatValue = (value: string) => {
  const match = value.trim().match(/^([\d,]+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return { numeric: 0, suffix: value, decimals: 0 };
  }

  const numeric = Number(match[1].replace(/,/g, ""));
  const suffix = match[2] ?? "";
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;

  return { numeric, suffix, decimals };
};

type StatCardProps = {
  value: string;
  label: string;
  delay: number;
  isInView: boolean;
};

const StatCard = ({ value, label, delay, isInView }: StatCardProps) => {
  const { numeric, suffix, decimals } = useMemo(() => parseStatValue(value), [value]);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: "easeOut",
      delay,
      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [numeric, delay, isInView]);

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <motion.div
      className="impact-stat text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="impact-value">
        {formatter.format(displayValue)}
        {suffix}
      </div>

      <div className="impact-label">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
    amount: 0.3,
  });

  return (
    <section ref={ref} className="stats-section relative overflow-hidden bg-background pt-20 pb-0">
      <div className="stats-section__backdrop" aria-hidden="true" />
      <div className="stats-section__grid" aria-hidden="true" />
      <div className="stats-section__glow stats-section__glow--left" aria-hidden="true" />
      <div className="stats-section__glow stats-section__glow--right" aria-hidden="true" />
      <div className="container mx-auto px-6">
        <motion.div
          className="impact-strip"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="impact-kicker">Sri Chaitanya Schools</p>

          <div className="impact-stats">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={i * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="stats-outline-bottom" aria-hidden="true" />
    </section>
  );
};

export default StatsSection;
