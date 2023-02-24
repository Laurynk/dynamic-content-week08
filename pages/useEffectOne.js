import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../styles/useEffectOne.module.css'

export default function useEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })

    return(
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                useEffectOne
            </div>

            <Link href="/" className={styles.link}>Home</Link>

            <div className={styles.number}>
                {number}
            </div>
        </div>
        </>
    )
}