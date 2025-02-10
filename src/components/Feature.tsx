"use client";
import { Music, Guitar, Mic2 } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: Music, title: "Wide Selection", desc: "Find any instrument you need" },
  { icon: Guitar, title: "Expert Staff", desc: "Knowledgeable guidance" },
  { icon: Mic2, title: "Best Prices", desc: "Competitive pricing guaranteed" },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% of the section is visible
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-sky-200 text-center transition-colors hover:text-primary p-4 rounded-md shadow-md"
            >
              <feature.icon className="h-10 w-10" />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
