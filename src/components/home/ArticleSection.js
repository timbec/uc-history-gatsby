import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';

import PostFragment from '../postItems/postFragment'; 

const ArticleSection = () => {
    const data = useStaticQuery(graphql`
            query {
                allWordpressWpWriting(limit: 2) {
                edges {
                    node {
                        title
                        date
                        excerpt
                        slug
                        wordpress_id
                        featured_media {
                            source_url
                          }
                    }
                }
                }
            }
        `)
    
    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {
                    data.allWordpressWpWriting.edges.map((post) => {
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
                    })
                }
            </ul>
        </div>
    )
}


export default ArticleSection
