"use client";

import React from "react";
import { Experience } from "@/types/experience";
import styles from "./ExperienceCard.module.css";
import { motion } from "framer-motion";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

type Props = {
  data: Experience;
  index?: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, ease: "easeOut", duration: 0.6 }
  })
};

export default function ExperienceCard({ data, index = 0 }: Props) {
  const isCurrent = /present/i.test(data.duration);

  return (
    <motion.article
      className={styles.card}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
    >
      <header className={styles.header}>
        <div className={styles.titleWrap}>
          <h3 className={styles.role}>{data.role}</h3>
          <div className={styles.company}>{data.company}</div>
          <div className={styles.meta}>
            <span className={styles.type}>{data.type}</span>
            {isCurrent && <span className={styles.current}>Currently</span>}
          </div>
        </div>

        <div className={styles.sideMeta}>
          <div className={styles.duration}>
            <FaCalendar /> <span>{data.duration}</span>
          </div>
          <div className={styles.location}>
            <FaMapMarkerAlt /> <span>{data.location}</span>
          </div>
        </div>
      </header>

      <div className={styles.body}>
        <div className={styles.responsibilities}>
          <h4>Responsibilities</h4>
          <ul>
            {data.responsibilities.map((r, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
              >
                {r}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className={styles.sideRight}>
          <div className={styles.techWrap}>
            {data.technologies.map((t, i) => (
              <motion.span
                key={t}
                className={styles.tech}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                title={t}
              >
                {t}
              </motion.span>
            ))}
          </div>

          {data.achievements?.length ? (
            <div className={styles.achievements}>
              {data.achievements.map((a, i) => (
                <div key={i} className={styles.achievement}>{a}</div>
              ))}
            </div>
          ) : null}

          {data.stats?.length ? (
            <div className={styles.stats}>
              {data.stats.map((s, i) => (
                <div key={i} className={styles.stat}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
