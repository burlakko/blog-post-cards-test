import { BlogPostStatus } from '../enums/blog-post-status.enum';
import { Author } from './author.interface';

export interface BlogPost {
  date: Date;
  link: string;
  status: BlogPostStatus;
  title: string;
  image: string;
  authors: Author[];
  topics: string[];
  categories: string[];
}
