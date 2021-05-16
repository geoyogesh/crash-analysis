
development

python -m venv crash-analysis

source crash-analysis/bin/activate

pip install fastapi
pip install uvicorn

conda config --env --add channels conda-forge
conda config --env --set channel_priority strict
conda install python=3 geopandas --channel conda-forge --strict-channel-priority
conda install pygeos --channel conda-forge --strict-channel-priority


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

