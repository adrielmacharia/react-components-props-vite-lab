import { useState } from "react";
import PropTypes from "prop-types";

function Article({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
  category = "Notes",
  content,
  index = 0,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const readingEmoji =
    minutes < 30
      ? "☕️".repeat(Math.max(1, Math.ceil(minutes / 5)))
      : "🍱".repeat(Math.ceil(minutes / 10));

  return (
    <article className={`article-card article-card-${(index % 3) + 1}`}>
      <div className="article-card-top">
        <span className="article-category">{category}</span>
        <span className="article-number">0{index + 1}</span>
      </div>
      <h3>{title}</h3>
      <p className="article-preview">{preview}</p>
      {isExpanded && content && (
        <p className="article-content">{content}</p>
      )}
      <div className="article-card-bottom">
        <div className="article-meta">
          <small>{date}</small>
          {minutes > 0 && (
            <span className="reading-time">
              <span aria-hidden="true">{readingEmoji}</span> {minutes} min read
            </span>
          )}
        </div>
        {content && (
          <button
            className="read-more"
            type="button"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((expanded) => !expanded)}
          >
            {isExpanded ? "Read less" : "Read story"}
            <span aria-hidden="true">{isExpanded ? "↑" : "↗"}</span>
          </button>
        )}
      </div>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  preview: PropTypes.string.isRequired,
  minutes: PropTypes.number,
  category: PropTypes.string,
  content: PropTypes.string,
  index: PropTypes.number,
};

export default Article;
