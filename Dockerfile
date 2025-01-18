FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install -y build-essential
libpq-dev nodejs
RUN mkdir /pichat
WORKDIR /pichat
ADD Gemfile /pichat/Gemfile
ADD Gemfile.lock /pichat/Gemfile.lock
RUN bundle install
ADD . /pichat