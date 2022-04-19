import { Post, PrismaClient } from "@prisma/client";

const { faker } = require('@faker-js/faker');


const prisma = new PrismaClient();

// create comment
function _fakerCreateCommentData(postId: number, commentId: number | null = null){
    const data: any = {
        name: faker.name.findName(),
        body: faker.lorem.paragraph(),
    }
    if(postId) data.postId = postId;
    if(commentId) data.commentId = commentId;
    return data;
}

function _fakerCreatePostData(){
    let t = faker.lorem.text();
    return {
        title: t.length > 50 ? String(t).substring(0, 50):t,
        content: faker.lorem.paragraph(Math.round(Math.random() * 10) + 30, '\n'),
    }
}

async function _fakerCreateComments(post: Post, commentId?: number,limit: number = 20, depth: number = 3){
    await prisma.comment.createMany({data: Array(limit).fill("").map(v => _fakerCreateCommentData(post.id))});

    if(depth > 0){
        const comments = await prisma.comment.findMany({where: {postId: post.id, commentId: commentId || null}});
        
        return Promise.all(comments.map(async c => _fakerCreateComments(post, c.id, Math.round(Math.random() * 2) + 1, depth - 1)));
    }
    
}

async function _fakerCreatePosts(limit: number = 50){
    
    await prisma.post.createMany({data: Array(limit).fill("").map( v => _fakerCreatePostData())});

    const posts = await prisma.post.findMany(),
            comments = posts.map(async p => _fakerCreateComments(p));

    return Promise.all(comments);
}

// export default function seed() {return _fakerCreatePosts()}
_fakerCreatePosts().then(r => {
    console.log("Database seeded.");
    process.exit(0)
}).catch(e => {
    console.error(e);
    process.exit(1);
});