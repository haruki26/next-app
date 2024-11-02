import Image from "next/image";
import styles from "./index.module.css"

type Props =  {
    date: string;    
}

export const DateLabel: React.FC<Props> = ({ date }) => {
    return (
        <span className={styles.date}>
            <Image
                src="/clock.svg"
                alt=""
                width={16}
                height={16}
                loading="eager"
            />
            {date}
        </span>
    );
}
