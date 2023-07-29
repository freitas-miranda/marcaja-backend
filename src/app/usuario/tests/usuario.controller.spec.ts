import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from '../usuario.controller';
import { UsuarioService } from '../usuario.service';
import { TestsHelper } from '@helpers/tests.helper';

describe('UsuarioController', () => {
  let controller: UsuarioController;
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [
        {
          provide: UsuarioService,
          useValue: TestsHelper.mockService,
        },
      ],
    }).compile();

    controller = module.get<UsuarioController>(UsuarioController);
    service = module.get<UsuarioService>(UsuarioService);
  });

  it('deve criar um registro', async () => {
    const input = {
      email: 'alan@miranda.com',
      senha: '12345678',
    };
    await controller.create(input);
    expect(service.create).toHaveBeenCalled();
    expect(service.create).toHaveBeenCalledWith(input);
  });

  it('deve listar todos registros', async () => {
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('deve exibir um registro', async () => {
    const id = 'ABC';
    await controller.findOne(id);
    expect(service.findOne).toHaveBeenCalledWith(id);
  });

  it('deve alterar um registro', async () => {
    const id = 'ABC';
    const input = {
      ativo: false,
    };
    await controller.update(id, input);
    expect(service.update).toHaveBeenCalledWith(id, input);
  });

  it('deve deletar um registro', async () => {
    const id = 'ABC';
    controller.delete(id);
    expect(service.delete).toHaveBeenCalledWith(id);
  });
});
