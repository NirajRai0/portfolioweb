"use client";

import React from "react";
import styles from "./ExperienceTimeline.module.css";

type Props = {
  children: React.ReactNode;
};

export default function ExperienceTimeline({ children }: Props) {
  return (
    <div className={styles.timelineWrap}>
      <div className={styles.line} aria-hidden />
      <div className={styles.items}>{children}</div>
    </div>
  );
}
