- geopandas
- matplotlib, descartes
- 
- ipykernel
- pyarrow
- fastparquet
- feather-format

- File formats
    - parquet
    - feather
    - avro
    - ORC

pyarrow is in-memory file format for fast analytics and interoperabily between formats and tools

----
``` bash
conda create -n geo_env
conda activate geo_env
conda config --env --add channels conda-forge
conda config --env --set channel_priority strict
conda install python=3 geopandas
```

``` bash
conda install -y pygeos --channel conda-forge
conda install -y matplotlib descartes mapclassify --channel conda-forge
conda install -y pyarrow --channel conda-forge
```

``` bash
pip install keplergl
```

pandasql dont support geometry type
``` bash
conda install -y pandasql  --channel conda-forge
```

``` bash
conda install -y plotly --channel conda-forge
```