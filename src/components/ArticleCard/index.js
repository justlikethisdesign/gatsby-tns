import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as style from './style.module.scss'

const ArticleCard = ({
    count,
    slug,
    image,
    imageTitle,
    imageAlt,
    title,
    modifiedForUser,
    modifiedForSchema,
    excerpt,
}) => {
    return (
        <div className={style.card}>
            <Link to={`/${slug}/`} className={style.link}>
                {image && (
                    <GatsbyImage
                        className={style.image}
                        image={image}
                        loading={count === 0 ? 'eager' : 'lazy'}
                        title={imageTitle}
                        alt={imageAlt}
                    />
                )}

                <h2 className={style.title}>{title}</h2>

                <div className="post__date_wrap">
                    <span className="post__date_updated">Last Updated: </span>
                    <time
                        className={'post__date'}
                        dateTime={modifiedForSchema}
                        itemProp="dateModified"
                    >
                        {modifiedForUser}
                    </time>
                </div>

                <div className={style.excerpt}>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </div>
    )
}

export default ArticleCard
