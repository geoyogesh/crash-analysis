from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel

import uvicorn

app = FastAPI()

@app.get('/')
def index():
    return { 'data' : 'jey'}

@app.get('/about')
def about():
    return { 'data' : 'about'}



'''
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=9000)
'''