import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('api/v1/usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', new ParseIntPipe()) id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  async remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.usuarioService.remove(id);
  }
}
