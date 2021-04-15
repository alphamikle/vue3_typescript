export interface ConstructUser {
  name: string;
  imageUrl?: string;
}

export class User {
  constructor(data: ConstructUser) {
    const { name, imageUrl } = data;
    this.name = name;
    this.imageUrl = imageUrl ?? '';
  }

  name: string;
  imageUrl: string;
}
