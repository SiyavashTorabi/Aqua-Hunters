class AddSpeciesToRegions < ActiveRecord::Migration[6.1]
  def change
    add_reference :regions, :species, foreign_key: true
  end
end
