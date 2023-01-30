import { Test, TestingModule } from '@nestjs/testing';
import { ChecklistsController } from './checklists.controller';
import { ChecklistsService } from './checklists.service';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { ChecklistEntity } from './entities/checklist.entity';

const mockArray = [
  {
    _id: '63d6bb377c5eabd78f895648',
    name: 'Belajar 2',
    isDone: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    updatedBy: 'admin',
    createdBy: 'admin',
  },
];

const resultArray = [
  new ChecklistEntity({
    _id: '63d6bb377c5eabd78f895648',
    name: 'Belajar 2',
    isDone: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    updatedBy: 'admin',
    createdBy: 'admin',
  }),
];

const createChecklistDto: CreateChecklistDto = {
  name: 'Sekolah #1',
};

describe('ChecklistsController', () => {
  let controller: ChecklistsController;
  let service: ChecklistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChecklistsController],
      providers: [
        {
          provide: ChecklistsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockArray),
            create: jest.fn().mockResolvedValue(createChecklistDto),
          },
        },
      ],
    }).compile();

    controller = module.get<ChecklistsController>(ChecklistsController);
    service = module.get<ChecklistsService>(ChecklistsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll()', () => {
    it('should return an array of checklist', async () => {
      expect(controller.findAll({})).resolves.toEqual(resultArray);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('create()', () => {
    it('should create a new checklist', async () => {
      const createSpy = jest.spyOn(service, 'create');

      await controller.create(createChecklistDto);
      expect(createSpy).toHaveBeenCalledWith(createChecklistDto);
    });
  });
});
