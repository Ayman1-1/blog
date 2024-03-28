
import React, { useState } from "react";
import "./BlogPosts.css";
import img1 from "../images/post1.png";
import img2 from "../images/post2.png";
import img3 from "../images/post3.png";
import img4 from "../images/newpost.png";

const BlogPosts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Art of Mindfulness",
      description:
        "Explore the practice of mindfulness and how it can help you find peace and tranquility in today's fast-paced world. Learn practical tips and techniques to incorporate mindfulness into your daily routine.",
      image: img1,
    },
    {
      id: 2,
      title: "Healthy Eating Habits",
      description:
        "Discover the importance of maintaining healthy eating habits to fuel your body for optimal performance. Learn about nutrient-rich foods, meal planning strategies, and simple recipes to support your health and well-being.",
      image: img2,
    },
    {
      id: 3,
      title: "The Power of Positive Thinking",
      description:
        "Unlock the transformative power of positive thinking and cultivate a positive mindset. Explore the impact of thoughts on emotions and behaviors, and learn techniques to shift your mindset towards positivity and resilience.",
      image: img3,
    },
  ]);

  const [editingPostId, setEditingPostId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [newPostVisible, setNewPostVisible] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostDescription, setNewPostDescription] = useState("");

  const handleEdit = (id, title, description) => {
    setEditingPostId(id);
    setEditedTitle(title);
    setEditedDescription(description);
  };

  const handleSave = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, title: editedTitle, description: editedDescription };
      }
      return post;
    });
    setPosts(updatedPosts);
    setEditingPostId(null);
    setEditedTitle("");
    setEditedDescription("");
  };

  const handleCancel = () => {
    setEditingPostId(null);
    setEditedTitle("");
    setEditedDescription("");
  };

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      title: newPostTitle,
      description: newPostDescription,
      image: img4,
    };
    setPosts([...posts, newPost]);
    setNewPostTitle("");
    setNewPostDescription("");
    setNewPostVisible(false);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <section className="blog-posts">
      <h2 className="section-title">Latest Posts</h2>
      <button className="add-post-btn" onClick={() => setNewPostVisible(true)}>
        {" "}
        Add Post
      </button>
      <div className="container">
        <div className="post-columns">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <img src={post.image} alt={post.title} />
              <div className="post-content">
                {editingPostId === post.id ? (
                  <>
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <textarea
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <div className="button-group">
                      <button onClick={() => handleSave(post.id)}>Save</button>
                      <button onClick={handleCancel}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <div className="button-group">
                      <button
                        className="btn"
                        onClick={() =>
                          handleEdit(post.id, post.title, post.description)
                        }
                      >
                        Edit
                      </button>
                      {/* <span className="button-space"></span> */}
                      <button className="btnDelete" onClick={() => handleDelete(post.id)}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
          {newPostVisible && (
            <div className="post new-post">
              <input
                type="text"
                placeholder="New Post Title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
              />
              <textarea
                placeholder="New Post Description"
                value={newPostDescription}
                onChange={(e) => setNewPostDescription(e.target.value)}
              />
              <button className="addpostbtn" onClick={handleAddPost}>Add Post</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
