``` bash
conda create -n crash_analysis_scripts -y
conda activate crash_analysis_scripts
conda config --env --add channels conda-forge
conda config --env --set channel_priority strict
conda install python=3 geopandas pygeos pyarrow fastparquet feather-format -y
```

/usr/local/anaconda3/envs/crash_analysis_scripts

ogr2ogr -f GeoJSON Crash.geojson Crash.gdb --debug on -progress
ogr2ogr -f MVT Crash_VectorTile Crash.geojson -dsco MAXZOOM=10 -dsco COMPRESS=NO --debug on -progress

ogr2ogr -f MVT Crash_VectorTile Crash.geojson -dsco MAXZOOM=10 -dsco COMPRESS=NO --debug on -progress  -skipfailures

ogr2ogr -f MVT Crash_VectorTile error.geojson -dsco MAXZOOM=10 -dsco COMPRESS=NO --debug on -progress  -skipfailures

ogr2ogr -f SQLite Crash.sqlite Crash.geojson  -dsco SPATIALITE=YES --debug on -progress -skipfailures -lco ENCODING=UTF-8

---
ogr2ogr -f GeoJSON Crash.geojson Crash.gdb --debug on -progress -skipfailures -lco ENCODING=UTF-8

ogr2ogr -f GPKG Crash.gpkg Crash.gdb --debug on -progress -skipfailures -lco ENCODING=UTF-8

ogr2ogr -f GPKG Crash.gpkg Crash.gdb --debug on -progress -skipfailures -oo ENCODING=UTF-8

ERROR 1: At line 808531, character 4: Unexpected state
ERROR 4: Failed to read GeoJSON data
FAILURE:

-lco ENCODING=UTF-8

ogr2ogr -f GeoJSON Crash.geojson Crash.gdb --debug on -progress -skipfailures -t_srs EPSG:4326
tippecanoe -zg -o out.mbtiles --drop-densest-as-needed Crash.geojson --force

ogr2ogr -f MVT Crash_VectorTile Crash.geojson -dsco MAXZOOM=10 -dsco COMPRESS=NO --debug on -progress 

ogr2ogr -f SQLite Crash.sqlite Crash.geojson  -dsco SPATIALITE=YES --debug on -progress -skipfailures -lco SPATIAL_INDEX=NO -t_srs EPSG:3857  --config NUM_THREADS ALL_CPUS --config OGR_SQLITE_CACHE 1024 --config OGR_SQLITE_SYNCHRONOUS OFF

ogr2ogr -f GPKG Crash.gpkg Crash.geojson --debug on -progress -skipfailures -lco SPATIAL_INDEX=NO -t_srs EPSG:3857 --config NUM_THREADS ALL_CPUS --config OGR_SQLITE_CACHE 1024 --config OGR_SQLITE_SYNCHRONOUS OFF

