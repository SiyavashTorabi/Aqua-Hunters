class Species < ApplicationRecord
  belongs_to :environment

  belongs_to :region
end
