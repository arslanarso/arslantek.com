import PostContent from "../../../components/Blog/Posts/PostDetail/PostContent";

import Meta from "../../../components/Meta";
import { getPostData, getPostFiles } from "../../../lib/Posts/post-util";

const PostDetailPage = ({ post }) => {
  return (
    <>
      <Meta
        title={post.title}
        description={post.excerpt}
        url={`https://arslantek.com/blog/posts/${post.slug}`}
        image={
          "https://arslantek.com/blog/posts/" + post.slug + "/" + post.image
        }
      >
        <meta name="author" content="Altan Kurt" />
      </Meta>
      <PostContent className={"col-span-4"} post={post} />
    </>
  );
};

export async function getStaticPaths() {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 1800,
  };
}

export default PostDetailPage;
