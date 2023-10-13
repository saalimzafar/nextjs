import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import Reader from "../../../blogComp/Reader";

export default function Blogs({ blogData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>...Loading</p>;
  }

  return <Reader title="Blog." delta={blogData.delta} />;
}

export async function getStaticPaths() {
  const blogDir = path.join(process.cwd(), "blogContent");
  const blogFiles = fs.readdirSync(blogDir);

  const paths = blogFiles.map((file) => {
    const slug = file.replace(".json", "");

    return {
      params: { blog: slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { blog } = params;
  const filePath = path.join(process.cwd(), "blogContent", `${blog}.json`);
  const blogData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return {
    props: {
      blogData,
    },
    revalidate: 1,
  };
}
