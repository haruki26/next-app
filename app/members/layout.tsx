import { Sheet } from "@/app/_components/Sheet";
import { Hero } from "@/app/_components/Hero";


type Props = {
    children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Hero title="Member" sub="メンバー" />
            <Sheet>{children}</Sheet>
        </>
    )
}

export default RootLayout;
