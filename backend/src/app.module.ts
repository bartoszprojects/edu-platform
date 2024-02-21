import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnippetsModule } from "./modules/snippets/snippets/snippets.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Snippet } from "./modules/snippets/snippets/snippet.entity";
import {SnippetCategory} from "./modules/snippet.categories/snippet.categories.entity";
import {SnippetCategoriesModule} from "./modules/snippet.categories/snippet.categories.module";
import {User} from "./modules/users/user.entity";
import {UserModule} from "./modules/users/user.module";
import {AuthModule} from "./modules/auth/auth.module";
import {jwtConstants} from "./modules/auth/constants";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'edu_platform',
      entities: [Snippet, SnippetCategory, User],
      synchronize: true,

    }),
      SnippetsModule,
      SnippetCategoriesModule,
      UserModule,
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
