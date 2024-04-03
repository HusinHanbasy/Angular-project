export class Movies {
  id!: number;
  title!: string;
  genre!: string;
  description!: string;
  recomended: boolean = false;
  star!: string;
  tags?: string[];
  duration!: string;
  language!: string;
  imageUrl!: string;
  director!: string;
  origin!: string;
  release!: string;
  price!: number;
}
