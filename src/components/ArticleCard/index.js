import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import style from './style.module.scss'

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
            <Link to={`/${slug}`}>
                <div>
                    {count === 0 ? (
                        <div className={style.image}>
                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet={image.srcSetWebp}
                                    sizes={image.sizes}
                                />
                                <source
                                    srcSet={image.srcSet}
                                    sizes={image.sizes}
                                />
                                <img
                                    sizes={image.sizes}
                                    srcSet={image.srcSet}
                                    src={image.src}
                                    alt={imageAlt}
                                    title={imageTitle}
                                />
                            </picture>
                        </div>
                    ) : (
                        <Img
                            className={style.image}
                            fluid={image}
                            title={imageTitle}
                            alt={imageAlt}
                        />
                    )}
                </div>

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
