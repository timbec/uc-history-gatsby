import React, { Fragment } from 'react'

const PostFragment = (post) => {
    // const post = { title, slug, excerpt }
    console.log(post);
    return (
            <li key={post.node.wordpress_id} 
            className="post__link">
                                <figure className="post__image">
                                <img src={post.node.featured_media.source_url} />
                                </figure>
                            <h2 className="post__title" dangerouslySetInnerHTML={{ __html: post.node.title }} />
                            <p className="post__escerpt" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                        </li>
    )
}

export default PostFragment
