``` bash
conda create -n crash_analysis_scripts -y
conda activate crash_analysis_scripts
conda config --env --add channels conda-forge
conda config --env --set channel_priority strict
conda install python=3 geopandas pygeos pyarrow fastparquet feather-format -y
```

/usr/local/anaconda3/envs/crash_analysis_scripts