import React from "react";
import BlogWindow from "./BlogWindow";

const Blog = () => {
    return (
        <section className="blog">
            <div className="container">
                <h1 className="subtitle">Blog</h1>
                <div className="content">
                    <BlogWindow/>
                    <BlogWindow/>
                    <BlogWindow/>
                </div>
            </div>
        </section>
    )
}

export default Blog;
