import { notFound } from "next/navigation";
import { Article } from "@/app/_components/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import { ButtonLink } from "@/app/_components/ButtonLink";

import styles from "./page.module.css";

type Props = {
    params: {
        slug: string;
    };
};

const Page: React.FC<Props> = async ({ params }) => {
    const data = await getNewsDetail(params.slug).catch(notFound);

    return (
        <>
        <Article data={data} />
        <div className={styles.footer}>
            <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
        </div>
        </>
    );
};

export default Page;
