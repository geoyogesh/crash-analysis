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
conda create -n geo_env
conda activate geo_env
conda config --env --add channels conda-forge
conda config --env --set channel_priority strict
conda install python=3 geopandas

conda install -y pygeos --channel conda-forge
conda install -y matplotlib descartes mapclassify --channel conda-forge
conda install -y pyarrow --channel conda-forge

pip install keplergl