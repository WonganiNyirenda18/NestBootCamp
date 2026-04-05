import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        {id: 1, name: 'Laptop', price: 999.99},
        {id: 2, name: 'Phone', price: 699.99},
    ];
}
