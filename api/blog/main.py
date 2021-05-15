
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
from . import schemas

app = FastAPI()

@app.get('/blogs')
def blogs(limit: int = 10, sort: Optional[str]=None):
    return { 'data' : ['blog1', 'blog2'], 'limit': limit}


@app.get('/blogs/{id}')
def blog(id: int): # str bool int
    return { 'data' : id}

@app.get('/blogs/{id}/comments')
def blog(id):
    return { 'data' : ['comment1', 'comment2']}


@app.post('/blog')
def create_blog(item: schemas.Item):
    return {'data': item}
