# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#  id          :integer      not null, primary key
#  movie_id    :integer      not null
#  actor_id    :integer      not null
#  ord         :integer


def find_angelina
  #find Angelina Jolie by name in the actors table
  Actor.find_by(name: 'Angelina Jolie')
end

def top_titles
  # get movie titles from movies with scores greater than or equal to 9
  # hint: use 'select' and 'where'
  Movie
    .select("id, title")
    .where("score >= 9")

  # Movie.find_by_sql(<<-SQL)
  #   SELECT
  #     id, title
  #   FROM
  #     movies
  #   WHERE
  #     score >= 9 AND movies.id IS NOT NULL
  # SQL
end

def star_wars
  #display the id, title and year of each Star Wars movie in movies.
  # hint: use 'select' and 'where'
  Movie
    .select("id, title, yr")
    .where("title LIKE '%Star Wars%'")
end


def below_average_years
  #display each year with movies scoring under 5,
  #with the count of movies scoring under 5 aliased as bad_movies,
  #in descending order
  # hint: use 'select', 'where', 'group', 'order'
  Movie
    .select("yr, COUNT(*) AS bad_movies")
    .where("score < 5").group("yr")
    .order("bad_movies DESC")

  # Movie.find_by_sql(<<-SQL)
  #   SELECT
  #     yr, COUNT(*) AS bad_movies
  #   FROM
  #     movies
  #   WHERE
  #     score < 5
  #   GROUP BY
  #     yr
  #   ORDER BY
  #     bad_movies DESC
  # SQL
end

def alphabetized_actors
  # display the first 10 actor names ordered from A-Z
  # hint: use 'order' and 'limit'
  # Note: Ubuntu users may find that special characters
  # are alphabetized differently than the specs.
  # This spec might fail for Ubuntu users. It's ok!
  Actor
    .select("*")
    .limit(10)
    .order("name")
end

def pulp_fiction_actors
  # practice using joins
  # display the id and name of all actors in the movie Pulp Fiction
  # hint: use 'select', 'joins', 'where'
  Actor
    .select("actors.*")
    .joins("JOIN castings ON castings.actor_id = actors.id")
    .joins("JOIN movies ON castings.movie_id = movies.id")
    .where("movies.title = 'Pulp Fiction'")

  # Actor.find_by_sql(<<-SQL)
  #   SELECT
  #     actors.*
  #   FROM
  #     actors
  #   JOIN
  #     castings ON castings.actor_id = actors.id
  #   JOIN
  #     movies ON castings.movie_id = movies.id
  #   WHERE
  #     movies.title = 'Pulp Fiction'
  # SQL

end

def uma_movies
  #practice using joins
  # display the id, title, and year of movies Uma Thurman has acted in
  # order them by ascending year
  # hint: use 'select', 'joins', 'where', and 'order'
  Movie
    .select("movies.id, movies.title, movies.yr")
    .joins("JOIN castings ON castings.movie_id = movies.id")
    .joins("JOIN actors ON castings.actor_id = actors.id")
    .where("actors.name = 'Uma Thurman'")
    .order("yr ASC")
end
