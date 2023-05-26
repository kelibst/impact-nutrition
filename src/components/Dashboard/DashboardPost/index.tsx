'use client'
import { useState, useEffect } from 'react';
import getPosts from '@/lib/getPosts';
import 'suneditor/dist/css/suneditor.min.css';

export interface Post {
    title: string;
    content: string;
    slug: string;
    author?: string;
    authorId?: string;
    imageUrl: string;
    published: boolean;
}

const Index = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await getPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = (slug: string) => {
        // Handle delete action for the post with the provided slug
    };

    const handleUpdate = (slug: string) => {
        // Handle update action for the post with the provided slug
    };



    return (
        <div className="p-4 max-w-screen-xl mx-auto">
            {(!posts.length) && <div>Loading!</div>}
            <table className="w-full">
                <thead className='p-4 m-4 bg-slate-300 rounded-xl border'>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr className='p-4 m-4' key={post.slug}>
                            <td>{post.title}</td>
                            <td> <div dangerouslySetInnerHTML={{ __html: post.content }} /></td>
                            <td>
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => handleDelete(post.slug)}
                                        className="bg-red-500 text-white px-4 py-2 mr-2 rounded-md"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleUpdate(post.slug)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Update
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
