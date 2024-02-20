export interface Comment {
    id: string;
    content: string;
    postId: string; // Se agrega una referencia al id del post relacionado
}
