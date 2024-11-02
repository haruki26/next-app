import styles from "./page.module.css";
import Image from "next/image";

import { ButtonLink } from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms"
import { NewsList } from "./_components/NewsList";

const data: { contents: News[] } = {
    contents: [
        {
            id: "1",
            title: "渋谷にオフィスを移動しました",
            category: {
                name: "更新情報"
            },
            publishedAt: "2023/05/19",
            createdAt: "2023/05/19",
        },
        {
            id: "2",
            title: "当社CEOが業界リーダーTOP30に選出されました",
            category: {
                name: "更新情報"
            },
            publishedAt: "2023/05/19",
            createdAt: "2023/05/19",
        },
        {
            id: "3",
            title: "テストの記事です",
            category: {
                name: "更新情報"
            },
            publishedAt: "2023/04/19",
            createdAt: "2023/04/19",
        },
    ],
};


const Home: React.FC = () => {
    const sliceData = data.contents.slice(0, 2)
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
            <NewsList news={sliceData} />
            <div className={styles.newsLink}>
                <ButtonLink href="/news">もっとみる</ButtonLink>
            </div>
        </section>
        </>
    );
}

export default Home