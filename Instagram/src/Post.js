import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import firebase from "firebase";

function Post({ postId, imageUrl, user, username, caption }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="rkkokkula"
          src="/static/images/avatar/1.jpg"
        />
        <h5>{username}</h5>
      </div>
      <img className="post__image" src={imageUrl} alt="avatar" />
      <h5 className="post__text">
        <strong>{username}</strong> {caption}
      </h5>
      <div className="post__comments">
        {comments.map((comment) => (
          // <p>
          //   <b>{comment.username}</b>
          //   {comment.text}
          // </p>
          <h5 className="post__text1">
            <strong>{comment.username}</strong> {comment.text}
          </h5>
        ))}
      </div>
      {user && (
        <form className="post__commentbox">
          <input
            className="post__input"
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
