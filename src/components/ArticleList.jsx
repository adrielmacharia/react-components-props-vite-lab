import Article from "./Article";
import PropTypes from "prop-types";

function ArticleList({ posts = [] }) {
  return (
    <main className="article-grid" aria-label="Blog stories">
      {posts.map((post, index) => (
        <Article key={post.id} {...post} index={index} />
      ))}
    </main>
  );
}

ArticleList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
      preview: PropTypes.string.isRequired,
      minutes: PropTypes.number,
      category: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

export default ArticleList;
