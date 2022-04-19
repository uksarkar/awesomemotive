import App from '@/app';
import validateEnv from '@utils/validateEnv';
import CommentRoute from '@routes/comment.route';
import PostRoute from '@routes/post.route';

validateEnv();

const app = new App([new PostRoute(), new CommentRoute()]);

app.listen();
