import { Link } from "react-router-dom";

const PostTitleBox = ({
  title,
  shortContent,
  contentLimit = 50,
  id,
  date,
}: {
  title: string;
  shortContent: string;
  contentLimit?: number;
  id: number;
  date: string;
}) => {
  const getLimited = (content: string) =>
    content.length > contentLimit
      ? content.substring(0, contentLimit) + "..."
      : content;

  return (
    <div className="block">
      <Link to={`/posts/${id}`}>
        <div className="card">
          <div className="card-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6 is-subtitle">
              <time>{date}</time>
            </p>

            <div className="content">{getLimited(shortContent)}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostTitleBox;
