FROM mysql:5.7
ENV MYSQL_HOST localhost  
ENV MYSQL_DATABASE agourgue  
ENV MYSQL_USER agourgue  
ENV MYSQL_PASSWORD cdp2019
ENV MYSQL_ROOT_PASSWORD cdp2019  
ENV MYSQL_PORT_3306_TCP_ADDR: mysql
ENV MYSQL_PORT_3306_TCP_PORT: 3306
COPY ./database_create.sql /docker-entrypoint-initdb.d/