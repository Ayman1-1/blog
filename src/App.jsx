import React from 'react';
import HeroSection from './components/HeroSection';
import BlogPosts from './components/BlogPosts';
import Header from './components/Header';
import './App.css';

// Import images
import img from './images/post1.png';
import img2 from './images/post2.png';
import img3 from './images/post3.png';

function App() {
  const title = "ABlog";
  const navLinks = ["Home", "About", "Contact"];
  const isLoggedIn = true;
  const headerColor = "#f0f0f0";

  const posts = [
    { title: "Post 1", description: "Description of Post 1", image: img },
    { title: "Post 2", description: "Description of Post 2", image: img2 },
    { title: "Post 3", description: "Description of Post 3", image: img3 }
  ];

  return (
    <>
      <Header title={title} navLinks={navLinks} isLoggedIn={isLoggedIn} headerColor={headerColor} />
      <HeroSection />
      {/* <HeroSection backgroundColor="#1e6091" /> */}
      <BlogPosts posts={posts} />
    </>
  );
}

export default App;
