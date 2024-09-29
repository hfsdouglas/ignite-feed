import styles from "./avatar.module.css"

export function Avatar({src}) {
    return (
        <img className={styles.avatar} src={src} />
    )
}