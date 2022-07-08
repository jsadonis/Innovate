import { Controller } from '@nestjs/common';
import { FoodmenuService } from './foodmenu.service';

@Controller('foodmenu')
export class FoodmenuController {
  constructor(private readonly foodmenuService: FoodmenuService) {}
}
