import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    // req.user contains the authenticated user
    return this.ordersService.create(createOrderDto, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-orders')
  getMyOrders(@Request() req) {
    return this.ordersService.findByUser(req.user.userId);
  }
}
