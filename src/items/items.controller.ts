import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}
  @Post()
  create(@Body() createItem: CreateItemDto): string {
    return `Name: ${createItem.name} Description: ${createItem.description}  Quantity: ${createItem.quantity}`;
  }
  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Put(':id')
  update(@Body() updateItem: CreateItemDto, @Param('id') id): string {
    return `Update: ${id}  Name: ${updateItem.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete: ${id}`;
  }
}
