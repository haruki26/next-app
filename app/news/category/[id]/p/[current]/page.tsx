import { NewsList } from "@/app/_components/NewsList";
import { Pagination } from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constans";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms"
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
        current: string;
    };
};

const Page: React.FC<Props> = async ({ params }) => {
    const current = parseInt(params.current, 10);

    if (Number.isNaN(current) || current < 1) {
        notFound();
    };

    const category = await getCategoryDetail(params.id).catch(notFound);

    const { contents: news, totalCount } = await getNewsList({
        filters: `category[eqauls]${category.id}`,
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (current - 1),
    });

    return (
        <>
        <NewsList news={news} />
        <Pagination
            totalCount={totalCount}
            current={current}
            basePath={`/newa/category/${category.id}`}
        />
        </>
    );
};

export default Page;
