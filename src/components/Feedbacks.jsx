import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { testimonials } from "../constants";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What Others Say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          );
        })}
      </div>
    </div>
  );
};

function TestimonialCard({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) {
  return (
    <motion.div
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1 flex flex-col h-full">
        <div className="text-white tracking-wider text-[14px] flex-grow">
          <p className="grow">{testimonial}</p>
        </div>
        <div className="mt-7 flex justify-between items-start gap-1">
          <div className="flex-1 flex flex-col min-h-[120px]">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>

            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default SectionWrapper(Feedbacks, "");
