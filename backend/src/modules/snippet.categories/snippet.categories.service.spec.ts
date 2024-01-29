import { Test, TestingModule } from '@nestjs/testing';
import { SnippetCategoriesService } from './snippet.categories.service';

describe('SnippetCategoriesService', () => {
  let service: SnippetCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnippetCategoriesService],
    }).compile();

    service = module.get<SnippetCategoriesService>(SnippetCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
