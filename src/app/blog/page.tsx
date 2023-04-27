import Hero from "@/components/Hero";
import getPosts from "@/lib/getPosts";
import Image from "next/image";
import React from "react";

const blog = async () => {
  const posts = await getPosts();

  return (
    <main className="main">
      <Hero />
      <section className="">
        <h2 className="heading_secondary">Blogs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article className="flex flex-col gap-4">
              <img
                src={post.imageUrl?.toString()}
                alt="post image"
                // width={2000}
                // height={2000}
              />
              <div className="">
                <h3 className="heading_tertiary">{post.title}</h3>
                <p>{post.slug}</p>
              </div>
              <div className=" flex gap-2">
                <button className="btn_primary">Read more</button>
                <button className="border-blue-800 border px-4 py-2 rounded">
                  Learn more
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <button className="self-center border-blue-800 border px-4 py-2 rounded">
        Load more
      </button>
    </main>
  );
};

export default blog;