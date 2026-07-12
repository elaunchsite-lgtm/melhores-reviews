export interface Author {
  name: string;
  avatar: string;
  role: string;
}

export interface ProductSpec {
  name: string;
  value: string;
}

export interface ReviewSection {
  title: string;
  content: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: Author;
  image: string;
  rating: number;
  pros: string[];
  cons: string[];
  specs: ProductSpec[];
  affiliateLink: string;
  affiliatePrice: string;
  affiliateStore: string;
  features: string[];
  verdict: string;
  sections: ReviewSection[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  color: string;
}
