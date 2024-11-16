import Image from "next/image";
import type { News } from "@/app/_libs/microcms";

import styles from "./index.module.css";
import { CategoryLabel } from "../Category";
import { DateLabel } from "../Date";

type Props = {
    data: News;
};

export const Article: React.FC<Props> = ({ data }) => {
    return (
        <main>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.meta}>
                <CategoryLabel category={data.category} />
                <DateLabel date={data.publishedAt ?? data.createdAt} />
            </div>
            {data.thumbnail && (
                <Image
                    src={data.thumbnail.url}
                    alt=""
                    className={styles.thumbnail}
                    width={data.thumbnail.width}
                    height={data.thumbnail.height}
                />
            )}
            <div 
                className={styles.content}
                dangerouslySetInnerHTML={{
                    __html: data.content,
                }}
            />
        </main>
    );
};