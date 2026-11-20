import { useState } from "react";
import Article from "./Article";
import PropTypes from "prop-types";

function ArticleList({ posts = [] }) {
  const [activeCategory, setActiveCategory] = useState("All stories");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    "All stories",
    ...new Set(posts.map((post) => post.category).filter(Boolean)),
  ];
  const query = searchQuery.trim().toLowerCase();
  const visiblePosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All stories" || post.category === activeCategory;
    const matchesSearch =
      !query ||
      `${post.title} ${post.preview} ${post.category}`
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="stories-section" id="stories">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The journal</p>
          <h2>Latest stories<span className="heading-period">.</span></h2>
        </div>
        <label className="search-field">
          <span className="visually-hidden">Search stories</span>
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search stories"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </label>
      </div>

      <div className="category-list" aria-label="Filter stories by category">
        {categories.map((category) => (
          <button
            className={`category-button${activeCategory === category ? " is-active" : ""}`}
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <main className="article-grid" aria-label="Blog stories">
        {visiblePosts.map((post, index) => (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
            category={post.category}
            content={post.content}
            index={index}
          />
        ))}
      </main>
      {visiblePosts.length === 0 && (
        <p className="empty-state">
          No stories found. Try another search or category.
        </p>
      )}
    </section>
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
