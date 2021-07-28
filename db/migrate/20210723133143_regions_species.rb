class RegionsSpecies < ActiveRecord::Migration[6.1]

  def change
    drop_table :regions_species
  end
end
