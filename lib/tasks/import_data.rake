require 'csv'

namespace :import_data do
  task technologies: :environment do
    technologies=[]
    CSV.foreach('tmp/csv/technologies_data.csv').each_slice(1000) do |row|
      technologies << {name: row[0], genre: row[1]}
    end
    Technology.import technologies
  end
end
