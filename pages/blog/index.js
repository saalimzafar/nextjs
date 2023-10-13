import fs from "fs";
import path from "path";
function Blog({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ol>
        {posts.map((post) => (
          <li className="list" key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.slug}</a>
          </li>
        ))}
      </ol>
      <style jsx>{`
        .list {
          list-style: alpha;
          margin: 2%;
          margin-left: 0;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const contentDirectory = path.join(process.cwd(), "blogContent");
  const filenames = fs.readdirSync(contentDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(".json", "");
    return {
      slug,
    };
  });

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default Blog;
