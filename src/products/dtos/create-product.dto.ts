import { IsInt, IsNotEmpty, IsNumber, IsString, Min,} from "class-validator"

export class CreateProductDto {
@IsString()
@IsNotEmpty()
name: string;

@IsInt()
price: number;

@IsString()
description: string;

@IsNumber()
@Min(0)
stock: number;

}