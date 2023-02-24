import Link from 'next/link'
import {useEffect, useState} from 'react'
import styles from "../styles/useEffectThree.module.css"

export default function useEffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setvalue] = useState(-10);

    useEffect(() => {
        setvalue(value + 10)
    }, [number])

    return(
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                useEffectThree
            </div>
            
            <Link href="/" className={styles.link}>Home</Link>

            <div className={styles.button}>
                <button onClick={() => setNumber(number + 1)}>Click Me</button>
            </div>

            <div className={styles.value}>
                {value}
            </div>
        </div>
            
        </>
    )
}