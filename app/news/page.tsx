import { NewsList } from "@/app/_components/NewsList";
import { getNewsList } from "@/app/_libs/microcms"
import { NEWS_LIST_LIMIT } from "../_constans";
import { Pagination } from "../_components/Pagination";
import { SearchField } from "../_components/SearchField";

const Page: React.FC = async () => {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return (
        <>
        <SearchField />
        <NewsList news={news} />
        <Pagination totalCount={totalCount} />
        </>
    );
};

export default Page;
