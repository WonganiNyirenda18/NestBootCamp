import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';

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

    @Post()
    create(@Body() body: any) {
        return 'This action creates a product';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return 'This action updates product #${id}';
    }

    

}