
development




uvicorn main:app --reload

swagger
http://localhost:8000/docs

redoc
http://localhost:8000/redoc

OpenAPI Specification

``` bash
python -m venv blog-env
pip install -r requirements.txt
```

Tableplus

```
conda create -n crash_analysis
conda activate crash_analysis
conda config --env --add channels conda-forge
conda config --env --set channel_priority strict
conda install python=3 geopandas
conda install fastapi
conda install uvicorn
conda install pygeos 
```

/usr/local/anaconda3/envs/crash_analysis