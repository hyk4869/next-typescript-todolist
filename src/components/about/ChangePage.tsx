import Link from 'next/link'
import React from 'react'
import styles from '../about/About.module.css'


export function ChangePage() {
  return (
    <div className={styles.changePageAbout}>
        <Link href={"/about"} >
            <button className={styles.AboutPageBtn}>About Page</button>
        </Link>
    </div>
  )
}
