import { Test, TestingModule } from '@nestjs/testing';
import { SnippetCategoriesController } from './snippet.categories.controller';

describe('SnippetCategoriesController', () => {
  let controller: SnippetCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnippetCategoriesController],
    }).compile();

    controller = module.get<SnippetCategoriesController>(SnippetCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
