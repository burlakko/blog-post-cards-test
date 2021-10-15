import { api } from '../api';
import { mapBlogPost } from '../mappers/blog-post.mapper';
import { BlogPost } from '../interfaces/blog-post.interface';
import { handleError } from '../errorHandler';

export async function getBlogPosts(): Promise<BlogPost[]> {
  return api
    .get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
    .then((data: Record<string, any>[]): BlogPost[] => data.map(mapBlogPost))
    .catch(handleError);
}
