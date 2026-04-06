import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService : ProductsService){}

    @Get() //GET
    findAll() {
        return `This action returns all products`;
    }

    @Get(':id') //GET http://localhost/products/id
    findOne(@Param('id') id: string){
    return `This action returns product #${id}`;
    }

    @Post()
    create(@Body() body: any) {
        return `This action creates a product`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return `This action updates product #${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes product #${id}`;
    }

}