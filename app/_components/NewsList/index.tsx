import Image from "next/image";

import styles from "./index.module.css"
import { CategoryLabel } from "../Category";
import { DateLabel } from "../Date";
import { News } from "@/app/_libs/microcms"


type Props = {
    news: News[]
};

export const NewsList: React.FC<Props> = ({ news }) => {
    if (news.length === 0) {
        return <p>記事がありません。</p>
    }
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <div className={styles.link}>
                        <Image
                        className={styles.image}
                        src="/no-image.png"
                        alt="No Image"
                        width={1200}
                        height={630}
                        />
                        <dl className={styles.contents}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <CategoryLabel category={article.category} />
                                <DateLabel date={article.publishedAt ?? article.createdAt} /> 
                            </dd>
                        </dl>
                    </div>
                </li>
            ))}
        </ul>
    )
}