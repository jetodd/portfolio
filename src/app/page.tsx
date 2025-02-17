import Link from "next/link";
import styles from './styles.module.css'

export default function Home() {
  return (
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <div className={`${styles.box} ${styles.never}`}>
          <div className={styles.title}>
            <Link href="/hello"><h1 className={styles.angle}>Hello</h1></Link>
          </div>
          </div>

          <div className={`${styles.box} ${styles.eat}`}>
            <div className={styles.title}>
              <Link href="/code"><h1 className={styles.angle}>Code</h1></Link>
            </div>
          </div>

          <div className={`${styles.box} ${styles.soggy} bg-no-repeat bg-contain md:bg-(length:--image-size)`}>
            <div className={styles.title}>
              <Link href="/cosplay"><h1 className={styles.angle}>Cosplay</h1></Link>
            </div>
          </div>
            
          <div className={`${styles.box} ${styles.weetbix}`}>
            <div className={styles.title}>
              <Link href="/contact"><h1 className={styles.angle}>Contact</h1></Link>
            </div>
          </div>
        </div>
      </main>
  );
}
