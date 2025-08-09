"use client"
import { motion } from 'framer-motion';
import { slideInFromLeft } from '../variants';
import styles from '../page.module.css'
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

export type TimelineEntry = {
  year:string;
  title:string;
  body:string;
}

type Props ={
    entries:TimelineEntry[]
};


export function History_test({entries}:Props) {
  return (
    <div className={styles.history}>
    <Timeline>
        {entries.map((entry, i)=>(
      <TimelineItem key={i}>
        <TimelinePoint icon={HiCalendar} />
        <motion.div
        key={i}
        variants={slideInFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        >
        <TimelineContent>
          <TimelineTime>{entry.year}</TimelineTime>
          <TimelineTitle>{entry.title}</TimelineTitle>
          <TimelineBody>
            {entry.body}
          </TimelineBody>
        </TimelineContent>
        </motion.div>
      </TimelineItem>
        ))}
    </Timeline>
    </div>
  );
}

