import Link from "next/link"
import Carousel from "@/components/carousel"
import styles from '../styles/CarouselPage.module.css'

export default function CarouselPage() {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                Carousel
            </div>
            <Link href="/" className={styles.link}>Home</Link>

            <Carousel/>
        </div>
        </>
    )
}