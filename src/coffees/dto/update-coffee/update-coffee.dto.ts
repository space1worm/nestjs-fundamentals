import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from '../create-coffee/create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
