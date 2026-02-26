# muserhao.github.io

Personal website and tech blog for Hao Xin -- Senior ML Scientist at Apple.

**Live site:** [muserhao.github.io](https://muserhao.github.io/)

## What's here

- **Portfolio** -- About, experience, education, skills, and publications
- **Blog** -- Tech blog with KaTeX math rendering, tag filtering, and neon-themed code/math blocks

## Structure

```
index.html          # Main portfolio page
style.css           # Global styles (neon Tokyo cyberpunk theme)
blog/
  index.html        # Blog listing page with tag filters
  blog.css          # Blog-specific styles
  posts/
    *.html          # Individual blog posts
```

## Adding a new blog post

1. Create a new `.html` file in `blog/posts/` (copy an existing post as a template)
2. Add KaTeX to the `<head>` for math support -- use `$...$` for inline and `$$...$$` for display math
3. Add a card entry in `blog/index.html`
4. Optionally update the preview on `index.html`
5. Commit and push to `main` -- the site updates automatically via GitHub Pages

## Tech stack

- Plain HTML/CSS/JS (no build tools, no frameworks)
- [KaTeX](https://katex.org/) for LaTeX math rendering
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) (Orbitron, Rajdhani, Share Tech Mono)
- GitHub Pages for hosting
