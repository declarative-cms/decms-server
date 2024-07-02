# DECMS stands for declarative CMS

This project is an early stage of a declarative CMS.

The idea is that the server manages an arbitrary data model with it's content in a way that you can design any type of model for a headless CMS.

This data is then being served via API to an independent render process that will turn it into a website.

Requirements:
- it allows users to manage content data model
- it allows users to managent actual content
- it offers an API to expose that content to the wild

Not in scope of this project:
- using content server via API (that will be a separate project)

## Mental model

Think of it like Decap CMS (formerly Netlify CMS) but even more vague and unopinionated, using database and APIs instead of filesystem.
