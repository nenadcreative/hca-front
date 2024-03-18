export default interface Page {
  id: number;
 
  attributes: {
    title: string;
    slug: string;
    SEO: object;
    sections: object;
    category: string
  };
}
