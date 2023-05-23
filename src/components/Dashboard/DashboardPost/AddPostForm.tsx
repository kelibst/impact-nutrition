import dynamic from "next/dynamic";
import { useState } from "react";
import "suneditor/dist/css/suneditor.min.css"; // Import SunEditor CSS

interface FormProps {
    title: string;
    content: string;
    slug: string;
    author: string;
    authorId: string;
    imageUrl: string;
    published: boolean;
}


const AddPostForm = () => {
    const SunEditor = dynamic(() => import("suneditor-react"), {
        ssr: false,
    });


    const [postInputs, setPostInputs] = useState<FormProps>({
        title: "",
        content: "",
        slug: "",
        author: "",
        authorId: "",
        imageUrl: "",
        published: false,
    });

    const {
        title,
        content,
        slug,
        author,
        authorId,
        imageUrl,
        published,
    } = postInputs;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Perform form submission or desired actions here
        console.log("Form submitted:", {
            title,
            content,
            slug,
            author,
            authorId,
            imageUrl,
            published,
        });
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
                    <SunEditor placeholder="Please type here..." />
                    {/* <textarea
                        id="content"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={content}
                        onChange={(e) =>
                            setPostInputs((prevState) => ({
                                ...prevState,
                                content: e.target.value,
                            }))
                        }
                    ></textarea> */}
                </div>
                <div className="mb-4">
                    <label htmlFor="slug" className="block mb-2 font-bold">
                        Slug
                    </label>
                    <input
                        type="text"
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
                    <label htmlFor="author" className="block mb-2 font-bold">
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={author}
                        onChange={(e) =>
                            setPostInputs((prevState) => ({
                                ...prevState,
                                author: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="authorId" className="block mb-2 font-bold">
                        Author ID
                    </label>
                    <input
                        type="text"
                        id="authorId"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={authorId}
                        onChange={(e) =>
                            setPostInputs((prevState) => ({
                                ...prevState,
                                authorId: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block mb-2 font-bold">
                        Image URL
                    </label>
                    <input
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
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPostForm;
