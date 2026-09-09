# Sitemap Generator

A Node.js library to easily create XML sitemaps by crawling websites. It efficiently handles large sites by streaming data to disk and automatically rotating sitemaps when the URL limit (default 50,000) is reached.

## Project Overview

- **Purpose:** Programmatically generate XML sitemaps for websites.
- **Technologies:** Node.js, [simplecrawler](https://github.com/simplecrawler/simplecrawler), [cheerio](https://cheerio.js.org/), [mitt](https://github.com/developit/mitt), [async](https://caolan.github.io/async/v3/), [date-fns](https://date-fns.org/).
- **Architecture:**
    - `index.js`: Main entry point. Orchestrates the crawler, sitemap rotation, and final file assembly.
    - `createCrawler.js`: Configures the `simplecrawler` instance with defaults and exclusion rules.
    - `discoverResources.js`: Implements custom URL discovery logic using Cheerio, respecting `rel="nofollow"` and robots meta tags.
    - `SitemapRotator.js`: Manages multiple sitemap streams and handles rotation logic based on entry limits.
    - `SitemapStream.js`: Handles low-level XML generation and streaming to temporary files.
    - `createSitemapIndex.js`: Generates a sitemap index file when multiple sitemaps are produced.
    - `helpers/`: Contains utility functions for URL stringification, file extension, safety escaping, etc.

## Building and Running

### Development Commands
- `npm install`: Install dependencies.
- `npm test`: Run the test suite using Jest.
- `npm run test:watch`: Run tests in watch mode.
- `npm run lint`: Lint the codebase using ESLint.
- `npm run flow`: Run Flow type checking (Note: Ensure `flow-bin` is available).

### Usage Example
```javascript
const SitemapGenerator = require('sitemap-generator');

const generator = SitemapGenerator('https://example.com', {
  stripQuerystring: false,
  filepath: './sitemap.xml',
});

generator.on('done', () => {
  console.log('Sitemaps created!');
});

generator.start();
```

## Development Conventions

- **Linting & Formatting:** The project uses ESLint and Prettier. Pre-commit hooks via Husky and lint-staged ensure code quality.
- **Testing:** Comprehensive unit tests are located in `src/**/__tests__`. Jest is the testing framework.
- **Git Hooks:** `pre-commit` hook runs linting and formatting on staged files.
- **CI/CD:** Configured with Travis CI (`.travis.yml`) and GitHub Actions (`.github/workflows/nodejs.yml`).
- **Dependency Management:** Uses `npm` with a `package-lock.json` file.
- **Versioning:** Semantic release is configured (`0.0.0-semantically-released`).

## Key Configuration Options

- `maxEntriesPerFile`: Maximum URLs per sitemap (default: 50,000).
- `filepath`: Destination path for the sitemap file.
- `lastMod`: Whether to include `<lastmod>` tags.
- `changeFreq`: Value for the `<changefreq>` tag.
- `priorityMap`: Array of priorities based on URL depth.
- `ignoreAMP`: Whether to ignore Google AMP pages (default: true).
- `ignore`: Custom function to exclude specific URLs.
