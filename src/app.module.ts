import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comment.module'; // Importa el módulo de comentarios

@Module({
  imports: [AuthModule, PostsModule, CommentsModule], // Importa también el módulo de comentarios
})
export class AppModule {}
