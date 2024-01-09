// pages/post/[slug].js

import fs from 'fs';
import path from 'path';

export default function BlogPost({ content }) {
  return (
    <div>
      <h1>Blog Post</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'post');
  const postFiles = fs.readdirSync(postsDirectory);

  const paths = postFiles.map((postFile) => ({
    params: { slug: postFile.replace(/\.html$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const postFilePath = path.join(process.cwd(), 'post', `${slug}.html`);
  
  try {
    const content = fs.readFileSync(postFilePath, 'utf-8');
    return {
      props: {
        content,
      },
    };
  } catch (error) {
    console.error('Error reading blog post file:', error);
    return {
      props: {
        content: '',
      },
    };
  }
}
