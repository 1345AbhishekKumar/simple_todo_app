import { NextRequest, NextResponse } from 'next/server';

interface POSTS {
  id: number;
  title: string;
  description: string;
}

const posts: POSTS[] = [
  { id: 1, title: 'Hello World', description: 'what is it?'  },
  { id: 2, title: 'Hello World 2', description: 'what is it?'  },
  { id: 3, title: 'Hello World 3', description: 'what is it?'  },
];

// GET /api/posts - Get all posts
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      message: 'Posts fetched successfully',
      data: posts,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

// POST /api/posts - Create a new post
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title } = body;

    // Validate required fields
    if (!title) {
      return NextResponse.json({
        success: false,
        message: 'Missing required field: title',
        data: null,
      }, { status: 400 });
    }

    // Create a new post
    const newPost = {
      id: Date.now(),
      title,
      description: 'what is it?',
    };
    posts.push(newPost);

    return NextResponse.json({
      success: true,
      message: 'Post created successfully',
      data: newPost,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

// PUT /api/posts?id=ID - Update a post
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title } = body;

    if (!id || !title) {
      return NextResponse.json({
        success: false,
        message: 'Missing required fields',
        data: null,
      }, { status: 400 });
    }

    const post = posts.find((post) => post.id === id);
    if (!post) {
      return NextResponse.json({
        success: false,
        message: 'Post not found',
        data: null,
      }, { status: 404 });
    }

    post.title = title;
    return NextResponse.json({
      success: true,
      message: 'Post updated successfully',
      data: post,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

// DELETE /api/posts?id=ID - Delete a post
export async function DELETE(req: NextRequest) {
    try {
      // Make sure the body is read correctly. If the body is empty (which can happen for DELETE), use default value as empty object.
      const body = req.method === 'DELETE' ? await req.json() : {};
  
      const { id } = body;
  
      // Validate the required 'id' field
      if (!id) {
        return NextResponse.json({
          success: false,
          message: 'Missing required field: id',
          data: null,
        }, { status: 400 });
      }
  
      const post = posts.find((post) => post.id === id);
      if (!post) {
        return NextResponse.json({
          success: false,
          message: 'Post not found',
          data: null,
        }, { status: 404 });
      }
  
      // Delete the post from the array
      posts.splice(posts.indexOf(post), 1);
  
      return NextResponse.json({
        success: true,
        message: 'Post deleted successfully',
        data: post,
      }, { status: 200 });
    } catch (error) {
      return NextResponse.json({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      }, { status: 500 });
    }
  }
  
