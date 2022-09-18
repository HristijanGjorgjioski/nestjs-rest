import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1234',
      name: 'Item 1234',
      qty: 100,
      description: 'This is the description',
    },
    {
      id: '1235',
      name: 'Item 1235',
      qty: 50,
      description: 'This is the description',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
