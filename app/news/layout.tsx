import { Hero } from "@/app/_components/Hero";
import { Sheet } from "@/app/_components/Sheet";

type Props = {
    children: React.ReactNode;
};

const NewsLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
        <Hero title="News" sub="ニュース" />
        <Sheet>{children}</Sheet>
        </>
    );
};

export default NewsLayout;
