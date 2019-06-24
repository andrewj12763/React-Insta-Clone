import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post">
                {props.data.map(post => (
                    <div className="post__individual">
                        <div className="post__head">
                            <img className="post__thumbnail" src={post.thumbnailUrl} alt={post.username}/>
                            <div className="post__username">{post.username}</div>
                        </div>
                        <div>
                            <img className="post__image" src={post.imageUrl} alt="An instapost"/>
                        </div>
                        <div className="likes">{post.likes} likes</div>
                        <CommentSection comments={post.comments} time={post.timestamp}/>
                    </div>
                ))}
            </div>
        )
};


export default PostContainer;