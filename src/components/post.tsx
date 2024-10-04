import styles from './post.module.css'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './comment'
import { Avatar } from './avatar'

interface Author {
    name: string
    role: string
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link'
    content: string
}

export interface PostType {
    id: number
    author: Author
    publishedAt: Date
    contents: Content[]
}

interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ]) 
    
    const [newCommentText, setNewCommentText] = useState('') 

    const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }
    
    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeleteOne)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.contents.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment" 
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return (
                        <Comment 
                            key={index} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    )
}