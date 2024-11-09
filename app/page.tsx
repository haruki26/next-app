import styles from "./page.module.css";
import Image from "next/image";

import { ButtonLink } from "@/app/_components/ButtonLink";
import { NewsList } from "./_components/NewsList";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constans";


const Home: React.FC = async () => {
    const data = await getNewsList({
        limit: TOP_NEWS_LIMIT,
    });

    return (
        <>
        <section className={styles.top}>
            <div>
                <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
                <p className={styles.description}>
                    私たちは市場をリードしているグローバルカンパニーです。
                </p>
            </div>
            <Image
                className={styles.bgmain}
                src="/img-mv.jpg"
                alt=""
                width={4000}
                height={1200}
            />
        </section>
        <section className={styles.news}>
            <h2 className={styles.newsTile} />
            <NewsList news={data.contents} />
            <div className={styles.newsLink}>
                <ButtonLink href="/news">もっとみる</ButtonLink>
            </div>
        </section>
        </>
    );
}

export default Home;
