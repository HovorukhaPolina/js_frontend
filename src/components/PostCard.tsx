import type { Post } from "../types/post";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="Post-Card">
      <span className="Post-Category">
        {post.category?.name || "Без категорії"}
      </span>
      <h2>{post.name}</h2>
      <p className="Post-Content">{post.content}</p>
    </div>
  );
}