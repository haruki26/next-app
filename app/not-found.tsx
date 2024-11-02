import styles from "./not-found.module.css"

const NotFound: React.FC = () => {
    return (
        <div className={styles.container}>
            <dl>
                <dt className={styles.title}>ページが見つかりませんでした</dt>
                <dd className={styles.text}>
                    あなたがアクセスしようとしたページは存在しませんでした
                    <br />
                    URLをご確認ください。
                </dd>
            </dl>
        </div>
    );
}

export default NotFound