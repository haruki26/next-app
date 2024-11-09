"use client";

import Link from "next/link"
import Image from "next/image";
import { useState } from "react";
import cs from "classnames"

import styles from "./index.module.css"

export const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <div>
            <nav className={cs(styles.nav, isOpen && styles.open)}>
                <ul className={styles.items}>
                    <li>
                        <Link href="/news">ニュース</Link>
                    </li>
                    <li>
                        <Link href="/members">メンバー</Link>
                    </li>
                    <li>
                        <Link href="/members">お問い合わせ</Link>
                    </li>
                </ul>
                <button className={cs(styles.button, styles.close)} onClick={close}>
                    <Image
                        src="/close/svg"
                        alt="閉じる"
                        width={24}
                        height={24}
                        priority
                    />
                </button>
            </nav>
            <button className={styles.button} onClick={open}>
                <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
            </button>
        </div>
    );
};
