FROM 166916908689.dkr.ecr.eu-west-1.amazonaws.com/vhols-nginx
MAINTAINER support@virginholidays.com

ENV APP_NAME="story-book-preact" \
    PROXY_HOST="vsolpublic-test5.webdev.vholsinternal.co.uk" \
    PROXY_PORT="80"

RUN rm -f /etc/nginx/sites-enabled/no-default

COPY docker/run.sh /scripts/run.sh

COPY docker/${APP_NAME}.conf /etc/nginx/sites-enabled/${APP_NAME}.conf

COPY dist/ /srv/www/

RUN chmod +x /scripts/run.sh

CMD ["/scripts/run.sh"]