# The Sunday Edit

A responsive personal blog built with React and Vite. The page pairs an
editorial introduction with searchable, filterable stories, expandable article
previews, reading-time indicators, and an email signup interaction.

## Getting started

Install the dependencies and start the local development server:

```sh
npm install
npm run dev
```

Run the test suite, lint the project, and create a production build:

```sh
npm test -- --run
npm run lint
npm run build
```

## Component tree

```text
App
├── Header
├── About
├── ArticleList
│   └── Article (one per post)
└── Newsletter form
```

`App` reads the blog profile and post list from `src/data/blog.js`, manages
category/search filters and newsletter feedback, and passes the relevant data
to its child components. `ArticleList` maps post data to keyed `Article`
components. Each article can expand to show its full story.

## Content and maintenance

Update the blog name, author/about text, and stories in `src/data/blog.js`.
Each post has a unique `id`, `title`, `date`, `preview`, `minutes`,
`category`, and `content`. Categories are derived from the post data, so new
categories automatically appear in the filter controls. Article dates and
about images have defaults for standalone component use.

The site styles and responsive breakpoints live in `src/index.css`. Component
and interaction tests live in `src/__tests__`; add coverage there when changing
filters, article behavior, or signup feedback.
