import { Author } from '../interfaces/author.interface';
import { Taxonomy } from '../enums/taxonomy.enum';
import { BlogPost } from '../interfaces/blog-post.interface';
import { getCategoryLabel } from '../labels/category.label';

export function mapBlogPost(remoteData: Record<string, any>): BlogPost {
  // `Record<string, any>` is better to replace with real interface of remote data, but I don't possess it.
  return {
    date: new Date(remoteData.date),
    link: remoteData.link,
    status: remoteData.status,
    title: remoteData.title.rendered,
    image: remoteData.featured_media,
    authors: remoteData._embedded.author.map(
      ({
        id,
        link,
        name,
      }: {
        id: number;
        link: string;
        name: string;
      }): Author => ({
        id,
        link,
        name,
      })
    ),
    topics: remoteData.topic
      .map((id: number) =>
        remoteData._embedded['wp:term']
          .find(
            (termGroup: Record<string, any>[]) =>
              termGroup[0].taxonomy === Taxonomy.TOPIC
          )
          .filter((topicData: Record<string, any>) => topicData.id === id)
          .map(({ name: title }: { name: string }): string => title)
      )
      .flat(),
    categories: remoteData.categories
      .map((id: number) =>
        remoteData._embedded['wp:term']
          .find(
            (termGroup: Record<string, any>[]) =>
              termGroup[0].taxonomy === Taxonomy.CATEGORY
          )
          .filter((categoryData: Record<string, any>) => categoryData.id === id)
          .map(({ slug }: { slug: string }): string => getCategoryLabel(slug))
      )
      .flat(),
  };
}
