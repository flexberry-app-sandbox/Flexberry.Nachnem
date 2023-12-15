docker build --no-cache -f SQL\Dockerfile.PostgreSql -t nachnem-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t nachnem-java/app ../../..
