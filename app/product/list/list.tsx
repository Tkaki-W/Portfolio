import styles from "./list.module.css"
import { Card } from "flowbite-react";

type TimelineItem = {
  img: string;
  title: string;
  body: string;
  url:string;
};

// ② props の型を“arraies”フィールド配列”として定義
type arrayProps = {
  arraies: TimelineItem[];
};



export function Component({arraies}:arrayProps) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 w-full auto-rows-fr">
        {arraies.map((array, i)=>(
            <div key={i} className={styles.content}>
                <a href={array.url}>
                <Card
                className="max-w-sm overflow-hidden"
                renderImage={() => 
                  <img src={array.img} 
                       className="w-full object-cover h-[200px]" 
                       alt="image 1" />}
                >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-[50px]">
                    {array.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 h-[90px]">
                    {array.body}
                </p>
                </Card>
                </a>
            </div>
        ))}
    </div>
  );
}