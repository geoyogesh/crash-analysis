from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def index():
    return { 'data' : 'jey'}

@app.get('/about')
def about():
    return { 'data' : 'about'}