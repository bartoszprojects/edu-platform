import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnippetsModule } from "./modules/snippets/snippets/snippets.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Snippet } from "./modules/snippets/snippets/snippet.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'edu_platform',
      entities: [Snippet],
      synchronize: true,

    }),
      SnippetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
