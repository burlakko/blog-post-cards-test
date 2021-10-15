# The Task

For the task, please reproduce the following design of three blog posts in cards.

![Image](https://assets.ubuntu.com/v1/c0a2b5b5-candidate-test-blog-row-design.png)

The requirements are:

- You must use Vanilla framework: vanillaframework.io/docs  
- You must pull the data from the WordPress API: people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json 

# Installation

1. Clone project.
2. Run `yarn install`.
3. Run `yarn start`
4. Open [page](http://localhost:8080/) in browser.

# Implementation Details

I wanted to keep this project lightweight and free of unnecessary dependencies, so I did not introduce any js framework. But I decided that componentization for the sake of avoiding spaghetti code is always a good idea, so I made things a bit spicy with the experimental component feature (see `src/components` and `src/pages` folders).

I bundled Vanilla-framework to include only the styles required.

The data received from API appeared to be a bit unnormalized, so I introduced a facade object, mapping function, and data interfaces; this is why I introduced Typescript to this project.

As I understood, the per-pixel positioning is not required, so I decided to deal with mostly default Vanilla framework settings, although I have rewritten a couple.