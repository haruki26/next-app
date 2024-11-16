import { NewsList } from "@/app/_components/NewsList";
import { SearchField } from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constans";
import { getNewsList } from "@/app/_libs/microcms";
import { useSearchParams } from "next/navigation";

type Props = {
    searchParams: {
        q?: string;
    };
};

const Page: React.FC<Props> = async ({ searchParams }) => {
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: searchParams.q
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
        </>
    );
};

export default Page;
