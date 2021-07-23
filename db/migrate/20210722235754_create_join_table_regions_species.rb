class CreateJoinTableRegionsSpecies < ActiveRecord::Migration[6.1]
  def change
    create_join_table :regions, :species do |t|
      # t.index [:region_id, :species_id]
      # t.index [:species_id, :region_id]
    end
  end
end
