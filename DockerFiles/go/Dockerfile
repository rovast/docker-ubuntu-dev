FROM rovast/ubuntu-dev-base

COPY --from=golang:1.14-stretch /usr/local/go/ /usr/local/go/

ENV PATH /usr/local/go/bin:$PATH

ENV GOLANG_VERSION 1.14.14
