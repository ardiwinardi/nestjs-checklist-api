import { ChecklistsModule } from '@/checklists/checklists.module';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

const data = [
  {
    name: 'Belajar 2',
    isDone: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    updatedBy: 'admin',
    createdBy: 'admin',
  },
];

describe('Checklists', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(`${process.env.MONGODB_CONNECTION_URI}`),
        ChecklistsModule,
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST checklists`, () => {
    return request(app.getHttpServer())
      .post('/checklists')
      .send({ name: 'test' })
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
