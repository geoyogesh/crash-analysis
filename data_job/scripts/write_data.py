import geopandas as gp
import warnings; warnings.filterwarnings('ignore', message='.*initial implementation of Parquet.*')

base_path = r'/mnt/c/Temp/GitHub/crash-analysis/data_job/scripts/'

def main():
    
    layers = [
        #('Census_Urban_Areas', 'VDOT_SMOOTHED_URBAN_AREAS', 'geojson', True),
        #('MPO_Study_Areas', 'MPO_STUDY_AREAS', 'geojson', True),
        #('Planning_District_Commissions', 'PLANNING_DISTRICT_COMMISSION', 'geojson', True),
        #('VDOT_Area_HQ', 'VDOT_Area_Headquarters', 'geojson', True),
        #('VDOT_Districts', 'VDOT_DISTRICTS', 'geojson', True),
        #('Virginia_County_Jurisdictions', 'VA_COUNTY', 'geojson', True),
        #('Virginia_Tax_Parcels', 'VA_Parcels', 'geojson', True),
        #('Virginia_Town_Jurisdictions', 'VA_TOWN', 'geojson', True),
        ('Crash', 'Crash', 'geojson', False)
    ]

    for layer in layers:
        layer_name, layer_file_name, file_type, is_archive = layer
        print ('processing ', layer_name, layer_file_name)
        if is_archive:
            states = gp.read_file(f'zip://{base_path}/source/{layer_name}.zip!{layer_file_name}.{file_type}')
        else:
            states = gp.read_file(f'{base_path}/source/{layer_name}.{file_type}')
        #states["wkb"] = states.geometry.apply(lambda g: g.wkb if g is not None else None)
        #states = states.drop(columns=["geometry"])
        #states.to_parquet(f'{base_path}/output/{layer_name}.parquet') 
        #states.to_parquet(f'{base_path}/output/{layer_name}_index.parquet', index=True) 
        #states.to_feather(f'{base_path}/output/{layer_name}.feather')
        #states.to_feather(f'{base_path}/output/{layer_name}_index.feather', index=True)

    print ('completed...')

if __name__ == "__main__":
    main()