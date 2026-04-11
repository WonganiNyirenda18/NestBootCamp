
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../products/entities/product.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto, userId: number): Promise<Order> {
    const order = new Order();
    order.user = { id: userId } as any;
    order.status = 'pending';
    order.createdAt = new Date();
    let totalAmount = 0;
    const orderItems: OrderItem[] = [];
    for (const itemDto of createOrderDto.items) {
      const product = await this.productRepository.findOne({
        where: { id: itemDto.productId },
      });
      if (!product) {
        throw new NotFoundException(`Product #${itemDto.productId} not found`);
      }
      if (product.stock < itemDto.quantity) {
        throw new Error(`Insufficient stock for product #${itemDto.productId}`);
      }

      const orderItem = new OrderItem();
      orderItem.product = product;
      orderItem.quantity = itemDto.quantity;
      orderItem.price = product.price;
      orderItems.push(orderItem);
      totalAmount += product.price * itemDto.quantity;
      // Update stock
      product.stock -= itemDto.quantity;
      await this.productRepository.save(product);
    }
    order.totalAmount = totalAmount;
    order.items = orderItems;
    return this.orderRepository.save(order);
  }

  async findByUser(userId: number): Promise<Order[]> {
    return this.orderRepository.find({
      where: { user: { id: userId } },
      relations: ['items', 'items.product'],
    });
  }
}
