import { Module } from '@nestjs/common';
import { CommentsController } from './comment.controller';
import { CommentsService } from './comments.service';
import { PostsModule } from '../posts/posts.module'; // Importa el módulo de posts

@Module({
  imports: [PostsModule], // Asegúrate de importar PostsModule aquí si PostsService está definido allí
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
