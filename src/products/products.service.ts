import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) {}

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async findOne(productId: number) : Promise<Product> {
        const product = await this.productRepository.findOne({where: {id: productId}})
        if (!product) {
            throw new NotFoundException(`Product #${productId} not found`);
        }
        return product;
    }

    create(createProduct)

    findAll() {
        return this.products
    }
    findOne(id: number){
        return this.products.find(p=> p.id === id);
    }
    create(product: any){
        const newProduct = {id: Date.now(), ...product};
        this.products.push(newProduct);
        return newProduct;
    }
    update(id: number, product: any){
        const index = this.products.findIndex(p => p.id === id);
        if(index >= 0){
            this.products[index] = {...this.products[index],...product};
            return this.products[index];
        }
        return null;
    }


}
