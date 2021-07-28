FROM mysql:8.0.26

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=fullcycle

COPY ./scripts /docker-entrypoint-initdb.d/

EXPOSE 3306