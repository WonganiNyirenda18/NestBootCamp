import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    findAll() {
        return 'This action returns all products';
    }


@Get(':id')
findOne(@Param('id') id: string){
    return 'This action returns product #${id}';
}

}