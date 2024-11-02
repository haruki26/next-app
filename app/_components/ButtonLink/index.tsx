import styles from "./index.module.css"

type Props = {
    href: string;
    children: React.ReactNode;
};

export const ButtonLink: React.FC<Props> = ({ href, children }) => {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    );
}
