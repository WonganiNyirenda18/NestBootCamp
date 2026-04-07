import { IsInt, IsNumber, IsString, Min } from "class-validator"

export class CreateProductDto {

@IsString()
name: string;

@IsInt()
price: number

@IsInt()
stock: number

@IsString()
description: string

}