import geopandas as gp
import warnings; warnings.filterwarnings('ignore', message='.*initial implementation of Parquet.*')

base_path = r'/Users/yogeshd/Desktop/timmons/crash-analysis/data_job/scripts/'

def main():
    
    layers = [
        ('Census_Urban_Areas', 'VDOT_SMOOTHED_URBAN_AREAS', 'geojson'),
        ('MPO_Study_Areas', 'MPO_STUDY_AREAS', 'geojson'),
        ('Planning_District_Commissions', 'PLANNING_DISTRICT_COMMISSION', 'geojson'),
        ('VDOT_Area_HQ', 'VDOT_Area_Headquarters', 'geojson'),
        ('VDOT_Districts', 'VDOT_DISTRICTS', 'geojson'),
        #('Virginia_County_Jurisdictions', 'VA_COUNTY', 'geojson'),
        #('Virginia_Tax_Parcels', 'VA_Parcels', 'geojson'),
        #('Virginia_Town_Jurisdictions', 'VA_TOWN', 'geojson'),
        ('Crash', 'Crash', 'fgdb')
    ]

    for layer in layers:
        layer_name, layer_file_name, file_type = layer
        print ('processing ', layer_name, layer_file_name)
        if file_type == 'fgdb':
            states = gp.read_file(f'zip://{base_path}/source/{layer_name}.zip!{layer_file_name}.gdb')
        else:
            states = gp.read_file(f'zip://{base_path}/source/{layer_name}.zip!{layer_file_name}.geojson')
        #states["wkb"] = states.geometry.apply(lambda g: g.wkb if g is not None else None)
        #states = states.drop(columns=["geometry"])
        states.to_parquet(f'{base_path}/output/{layer_name}.parquet') 
        states.to_parquet(f'{base_path}/output/{layer_name}_index.parquet', index=True) 
        states.to_feather(f'{base_path}/output/{layer_name}.feather')
        states.to_feather(f'{base_path}/output/{layer_name}_index.feather', index=True)

    print ('completed...')

if __name__ == "__main__":
    main()