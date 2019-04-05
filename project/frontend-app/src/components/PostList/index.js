import React from 'react'
import {connect} from 'react-redux'
import Post from '../Post'
import {deletePost, fetchAllPosts} from "../../actions/post";

function PostList({ posts, onDelete }) {
    if(!posts.length) {
        return (
            <div>
                No Posts
            </div>
        )
    }
    return (
        <div>
            {posts.map(post => {
                return (
                    <Post post={ post } onDelete={ onDelete } key={ post._id } />
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deletePost(id));
        },
        getPosts: id => {
            dispatch(fetchAllPosts(id))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);