import React from 'react'
import PropTypes from 'proptypes'
import Post from './Post'

const Posts = ({ posts, sortMode, sort }) => (
    <div>
        {sortMode !== 'portfolio' &&
            posts.sort(sort).map(post => {
                return (
                    <Post
                        totalSupply={post.totalSupply}
                        tokenAddress={post.tokenAddress}
                        title={post.title}
                        contents={post.contents}
                        ipfsHash={post.ipfsHash}
                        timestamp={post.timestamp}
                        tokenBalance={post.tokenBalance}
                        sellValue={post.sellValue}
                        key={post.tokenAddress}
                    />
                )
            })}
        {sortMode === 'portfolio' &&
            posts.filter(post => post.tokenBalance > 0).map(post => {
                return (
                    <Post
                        totalSupply={post.totalSupply}
                        tokenAddress={post.tokenAddress}
                        title={post.title}
                        contents={post.contents}
                        ipfsHash={post.ipfsHash}
                        timestamp={post.timestamp}
                        tokenBalance={post.tokenBalance}
                        sellValue={post.sellValue}
                        key={post.tokenAddress}
                    />
                )
            })}
    </div>
)

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    sortMode: PropTypes.string.isRequired,
    sort: PropTypes.array.isRequired
}

export default Posts
