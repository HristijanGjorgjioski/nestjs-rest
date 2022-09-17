import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items!!';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item: ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name Item: ${createItemDto.name} -- Desc Item: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Item with ID: '${id}' deleted!`;
  }

  @Put(':id')
  put(@Param('id') id): string {
    return `Item with ID: '${id}' updated!`;
  }
}
