class CreateJoineTableRegionsSpecies < ActiveRecord::Migration[6.1]
  def change
    create_table :joine_table_regions_species do |t|
      t.string :regions
      t.string :species

      t.timestamps
    end
  end
end
