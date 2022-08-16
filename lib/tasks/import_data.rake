require 'csv'

namespace :import_data do
  task import_technologies: :environment do
    technologies = []
    CSV.foreach('tmp/csv/technologies_data.csv').each_slice(1000) do |rows|
      rows.each { |row|
        technologies << { name: row[0], genre: row[1] }
      }
    end
    Technology.upsert_all(technologies, unique_by: :name)
  end

  task import_genres: :environment do
    genres = []
    CSV.foreach('tmp/csv/genres_data.csv').each_slice(1000) do |rows|
      rows.each { |row|
        genres << { name: row[0] }
      }
    end
    Genre.upsert_all(genres, unique_by: :name)
  end

  task import_technology_genres: :environment do
    technology_genres = []
    CSV.foreach('tmp/csv/technology_genres_data.csv').each_slice(1000) do |rows|
      rows.each { |row|
        technology_genres << { technology_id: row[0], genre_id: row[1] }
      }
    end
    TechnologyGenre.upsert_all(technology_genres)
  end
end
