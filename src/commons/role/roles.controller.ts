import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Post,
  BadRequestException,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { UpdateRoleDto } from './dto/update-role.dto';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    try {
      return this.rolesService.create(createRoleDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get()
  find() {
    return this.rolesService.find();
  }

  @Get(':id')
  findByID(@Param('id') id: string) {
    return this.rolesService.findByID(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }
}
