import { getBlogPosts } from '../facades/blog-posts.facade';
import { Page, PageCreatorArgs } from '../interfaces/page.intereface';
import { BlogPost } from '../interfaces/blog-post.interface';
import { basePage } from './page';
import { createPostCard } from '../components/blog-post-card.component';
import { BlogPostStatus } from '../enums/blog-post-status.enum';

type BlogPostsPage = Page & {
  data: {
    blogPosts: BlogPost[];
  };
};

export const blogPostsPage: BlogPostsPage = {
  ...basePage,
  title: 'Blog posts',
  data: {
    blogPosts: [],
  },
  useTemplate() {
    return `<div class="row u-equal-height u-clearfix" id="blog-posts-container"></div>`;
  },
  beforeRender(): Promise<void> {
    document.title = this.title;
    return getBlogPosts().then((blogPosts) => {
      this.data.blogPosts = blogPosts;
      this.data.blogPostsFetched = true;
    });
  },
  async afterRender(): Promise<void> {
    requestAnimationFrame(() =>
      this.data.blogPosts
        .filter((post: BlogPost) => post.status === BlogPostStatus.PUBLISHED)
        .forEach((post: BlogPost) =>
          createPostCard(document.getElementById('blog-posts-container'), {
            post,
          })
        )
    );
  },
};

export const createBlogPostsPage = (...args: PageCreatorArgs) =>
  blogPostsPage.create(...args);
