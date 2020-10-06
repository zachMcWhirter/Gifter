import React, { useState, useContext } from "react";
import { PostContext } from "../providers/PostProvider";


const PostForm = () => {
    const { addPost, getAllPosts } = useContext(PostContext)
    const [post, setPost] = useState({
        title: "",
        imageUrl: "",
        caption: "",
        dateCreated: "",
        userProfileId: 2
    });


    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = e => {
        const stateToChange = { ...post };
        stateToChange[e.target.id] = e.target.value;
        setPost(stateToChange);
    };

    const createNewPost = e => {
        e.preventDefault();
        if (post.title === "") {
            alert("Give your post a title!")
        } else {
            setIsLoading(true);
        }

        addPost(post)
            .then(() => getAllPosts());

    };

    return (
        <>
            <form>
                <fieldset>
                    <div >
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            placeholder="Title"
                            value={post.title}
                        />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="imageUrl"
                            placeholder="Url"
                            value={post.imageUrl}
                        />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="caption"
                            placeholder="Caption"
                            value={post.caption}
                        />
                        <input
                            type="date"
                            required
                            onChange={handleFieldChange}
                            id="dateCreated"
                            placeholder="Date"
                            value={post.dateCreated}
                        />
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                onClick={createNewPost}
                            >Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default PostForm;