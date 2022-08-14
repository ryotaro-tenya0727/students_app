require 'csv'

namespace :import_data do
  task technologies: :environment do
    columns = [:name, :genre]
    CSV.foreach('tmp/csv/technologies_data.csv').each_slice(1000) do |row|
      technologies = row
      Technology.import columns, technologies, on_duplicate_key_update: {conflict_target: [:id], columns: [:name]}
    end
  end
end
