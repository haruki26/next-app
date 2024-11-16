import { getNewsList } from "@/app/_libs/microcms";
import { NewsList } from "../_components/NewsList";

const Page: React.FC = async () => {
    const { contents: news } = await getNewsList();

    return <NewsList news={news} />;
};

export default Page;
