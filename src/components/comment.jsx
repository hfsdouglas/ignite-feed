import styles from './comment.module.css';

import { ThumbsUp, Trash } from '@phosphor-icons/react';

import { Avatar } from './avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/hfsdouglas.png" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Douglas Faria</strong>
                            <time title="11 de maio de 2022 às 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}