# NxBllingKafka

The project consists of

1. Payment API Gateway
2. Billing Kafka Microservice
3. Auth Kafka Microserice

## setup

1. Clone project
2. Navigate into project and run `npm install`
3. Set up Zookeeper and Kafka Docker containers `docker compose up`
4. Run the different services `nx serve api-gateway` `nx serve billing` `nx serve auth`
s