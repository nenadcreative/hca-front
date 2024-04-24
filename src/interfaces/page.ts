/** @format */

export default interface Page {
  id: number;

  attributes: {
    title: string;
    slug: string;
    SEO: object;
    sections: object;
    category: string;
    attributes: object;
    Hero: any;
    publishedAt: string;
    featuredImage: any;
    content: any;
  };
}
