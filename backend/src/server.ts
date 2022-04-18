import App from '@/app';
import IndexRoute from '@routes/index.route';
import validateEnv from '@utils/validateEnv';
import CommentRoute from './routes/comment.route';
import PostRoute from './routes/post.route';

validateEnv();

const app = new App([new IndexRoute(), new PostRoute(), new CommentRoute()]);

app.listen();
