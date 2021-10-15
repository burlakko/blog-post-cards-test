import format from 'date-fns/format';
import {
  Component,
  ComponentCreatorArgs,
} from '../interfaces/component.interface';
import { BlogPost } from '../interfaces/blog-post.interface';
import { baseComponent } from './comopnent';
import { Author } from '../interfaces/author.interface';

type BlogPostCard = Component & {
  data: {
    post: BlogPost;
  };
};

const blogPostCard: BlogPostCard = {
  ...baseComponent,
  data: {
    post: null,
  },
  useTemplate: ({ post }) => {
    console.log(post);
    return `<div class="col-4">
      <div class="p-card blog-post-card">
        <div class="p-card__header blog-post-card__header">
          <h5 class="p-muted-heading u-no-margin--bottom">${post.topics.join(
            ', '
          )}
          </h5>
        </div>
        <div class="blog-post-card__content">
          <img class="p-card__image" src="${post.image}" />
          <h4 class="blog-post-card__title">
            <a href="${post.link}">${post.title}</a>
          </h4>
          <p class="u-no-margin--bottom">
            <em>By ${post.authors.map(
              (author: Author) => `<a href="${author.link}">${author.name}</a>`
            )}
                on ${format(new Date(post.date), 'dd MMMM y')}</em>
          </p>
        </div>
        <div class="blog-post-card__footer">
          <p class="p-text--small u-no-margin--bottom">
            ${post.categories.join(', ')}
          </p>
        </div>
      </div>
    </div>`;
  },
};

export const createPostCard = (...args: ComponentCreatorArgs) =>
  blogPostCard.create(...args);
