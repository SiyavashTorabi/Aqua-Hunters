class Regions < ActiveRecord::Migration[6.1]
  def change
    remove_column :regions, :species_id
  end
end
