import { CategoryLabel } from "@/app/_components/Category";
import { NewsList } from "@/app/_components/NewsList";
import { Pagination } from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constans";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms"
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
    };
};

const Page: React.FC<Props> = async ({ params }) => {
    const category = await getCategoryDetail(params.id).catch(notFound);
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    });

    return (
        <>
        <p>
            <CategoryLabel category={category} />の一覧
        </p>
        <NewsList news={news} />
        <Pagination
            totalCount={totalCount}
            basePath={`/news/category/${category.id}`}
        />
        </>
    );
};

export default Page;
