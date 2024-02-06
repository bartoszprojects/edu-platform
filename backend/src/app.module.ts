import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnippetsModule } from "./modules/snippets/snippets/snippets.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Snippet } from "./modules/snippets/snippets/snippet.entity";
import {SnippetCategory} from "./modules/snippet.categories/snippet.categories.entity";
import {SnippetCategoriesModule} from "./modules/snippet.categories/snippet.categories.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'edu_platform',
      entities: [Snippet, SnippetCategory],
      synchronize: true,

    }),
      SnippetsModule,
      SnippetCategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
