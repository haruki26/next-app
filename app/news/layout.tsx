import { Hero } from "@/app/_components/Hero";
import { Sheet } from "@/app/_components/Sheet";

type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

const NewsLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
        <Hero title="News" sub="ニュース" />
        <Sheet>{children}</Sheet>
        </>
    );
};

export default NewsLayout;
