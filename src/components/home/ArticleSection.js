import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

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
                            localFile {
                                childImageSharp {
                                  fluid {
                                    src
                                  }
                                }
                              }
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
                            <PostFragment 
                            key={post.node.wordpress_id} 
                            post={post} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default ArticleSection
