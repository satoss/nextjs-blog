import React from 'react'
import styles from './styles.module.scss'

type BreadCrumbProps = {
  list: {
    text: string
    path?: string
  }[]
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ list }) => {
  return (
    <ol className={styles.breadcrumb}>
      {list.map(({ text, path }, index) => (
        <li key={index} className={styles.item}>
          {list.length - 1 !== index ? (
            <a href={path} className={styles.link}>
              {text}
            </a>
          ) : (
            <span>{text}</span>
          )}
        </li>
      ))}
    </ol>
  )
}

export default BreadCrumb
