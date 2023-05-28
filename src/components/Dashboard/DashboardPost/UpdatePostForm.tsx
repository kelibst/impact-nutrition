
import dynamic from "next/dynamic";
import { FC, useState } from "react";
import "suneditor/dist/css/suneditor.min.css"; // Import SunEditor CSS
import axios from "axios";
import { toast } from 'react-toastify';
import { Post } from ".";

interface FormProps {
    id?: string;
    title: string;
    content: string;
    slug: string;
    author?: string;
    authorId?: string;
    imageUrl: string;
    published: boolean;
}
type AddPostProp = {
    onClose: () => void,
    post: Post
}
const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});


export const updatePOST = async (id: string, title: string, content: string, slug: string, imageUrl: string, published: boolean) => {

    const headers = {
        Accept: "*/*",
        "Content-Type": "application/json",
    };

    const body = JSON.stringify({
        id,
        title,
        content,
        slug,
        imageUrl,
        published,
    });

    try {
        const response = await axios.put(`${process?.env?.LOCALURL ? process?.env?.LOCALURL : "http://localhost:3000"}/blog/api`, body, {
            headers,
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};



const UpdatePostForm: FC<AddPostProp> = ({ onClose, post }) => {

    const [postInputs, setPostInputs] = useState<FormProps>({
        id: post.id,
        title: post.title,
        content: post.content,
        slug: post.slug,
        imageUrl: post.imageUrl,
        published: post.published,
    });

    const {
        id,
        title,
        content,
        slug,
        imageUrl,
        published,
    } = postInputs;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            const post = await updatePOST(
                id!,
                title,
                content,
                slug,
                imageUrl,
                published,
            )

            setPostInputs({
                id: "",
                title: "",
                content: "",
                slug: "",
                imageUrl: "",
                published: false,
            })
            const notify = () => toast.success("Post Updated!");
            notify()
            onClose()
        } catch (error) {
            console.log(error, 'error')
            const notify = () => toast.error("Something went wrong!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            notify()
        }

    };

    const handleContentChange = (content: string) => {
        setPostInputs((prevState) => ({
            ...prevState,
            content: content,
        }));
    };

    return (
        <div>
            <form className="p-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 font-bold">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                        value={title}
                        onChange={(e) =>
                            setPostInputs((prevState) => ({
                                ...prevState,
                                title: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block mb-2 font-bold">
                        Content
                    </label>
                    <SunEditor
                        placeholder="Please type here..."
                        onChange={handleContentChange}
                        setContents={content}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="slug" className="block mb-2 font-bold">
                        Slug
                    </label>
                    <input
                        type="text"
                        required
                        id="slug"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={slug}
                        onChange={(e) =>
                            setPostInputs((prevState) => ({
                                ...prevState,
                                slug: e.target.value,
                            }))
                        }
                    />
                </div>


                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block mb-2 font-bold">
                        Image URL
                    </label>
                    <input
                        required
                        type="text"
                        id="imageUrl"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={imageUrl}
                        onChange={(e) =>
                            setPostInputs((prevState) => ({
                                ...prevState,
                                imageUrl: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="published" className="block mb-2 font-bold">
                        Published
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            id="published"
                            className="mr-2"
                            checked={published}
                            onChange={(e) =>
                                setPostInputs((prevState) => ({
                                    ...prevState,
                                    published: e.target.checked,
                                }))
                            }
                        />
                        Published
                    </label>
                </div>
                <div className="flex">
                    <button
                        type="submit"
                        className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePostForm;
