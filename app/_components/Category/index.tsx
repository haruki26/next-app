import { Category } from "@/app/_libs/microcms"
import styles from "./index.module.css"

type Props = {
    category: Category;
};

export const CategoryLabel: React.FC<Props> = ({ category }) => {
    return <span className={styles.tag}>{category.name}</span>;
}
