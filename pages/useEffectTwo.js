import Link from "next/link"
import {useState, useEffect} from "react"
import styles from "../styles/useEffectTwo.module.css"

export default function useEffectTwo() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber (number + 50);
    }, [])

    return(
        <>
        <div className={styles.container}>

            <div className={styles.header}>
                useEffectTwo
            </div>

            <Link href="/" className={styles.link}>Home</Link>

            <div className={styles.number}>
                {number}
            </div>
        </div>
            
        </>
    )
}