"use client";

import React from "react";
import experiences from "@/data/experienceData";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimeline from "./ExperienceTimeline";
import styles from "./ExperienceSection.module.css";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};

export default function ExperienceSection() {
  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.header}>
        <motion.h2
          id="experience-heading"
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className={styles.actions}>
          <a className={styles.cvBtn} href="/cv/NirajResume.html" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </div>

      <motion.div className={styles.container} initial="hidden" whileInView="visible" variants={container} viewport={{ once: true }}>
        <ExperienceTimeline>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} data={exp} index={i} />
          ))}
        </ExperienceTimeline>
      </motion.div>
    </section>
  );
}
