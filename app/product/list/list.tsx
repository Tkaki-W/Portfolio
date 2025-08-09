import styles from "./list.module.css"
import { Card } from "flowbite-react";

type arrayProps ={
img: string;
title: string;
body : string;
};

export function Component({arraies}:arrayProps) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {arraies.map((array, i)=>(
            <div key={i} className={styles.content}>
                <a href={array.url}>
                <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc= {array.img}
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {array.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {array.body}
                </p>
                </Card>
                </a>
            </div>
        ))}
    </div>
  );
}