---
marp: true
---

<!-- marp: true -->
<!-- paginate: true -->
<!-- headingDivider: 2 -->
<!-- footer: '[Abraham Schilling](https://github.com/n4bb12), 19.07.2020' -->

<!-- N4BB12 Theme -->
<style>
  section {
    font-size: 1.5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #224466;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    width: 100%;
    text-align: center;
  }
  h1 img,
  h2 img,
  h3 img,
  h4 img,
  h5 img,
  h6 img,
  p img {
    display: inline;
  }
  blockquote,
  ul,
  ol,
  p,
  table {
    width: auto;
    margin: 0 auto 1rem;
  }
  strong {
    color: #0366d6 !important;
  }
  img {
    display: table;
    margin: 0 auto;
  }
  footer {
    font-size: 0.75rem;
  }
  footer a {
    text-decoration: underline;
    color: inherit;
  }
</style>

# Databases

<style scoped>
h1 {
  padding-top: 5%;
  font-size: 3rem;
  color: white;
}
</style>

![bg](https://images.unsplash.com/photo-1590496793929-36417d3117de?ixlib=rb-1.2.1&auto=format&fit=crop&w=3080&q=80)

## Database Types

- Key-value
- Relational
- Document
- Time Series
- Wide-column
- Graph
- Search

[Comprehensive List](https://db-engines.com/en/articles)

## Key-value database

![bg right:60% 60%](https://upload.wikimedia.org/wikipedia/commons/5/5b/KeyValue.PNG)

e.g. [Redis](https://redis.io/)

## Relational database

![bg right:70% 70%](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Relational_Model.svg/1030px-Relational_Model.svg.png)

e.g. [PostgreSQL](https://www.postgresql.org/)

## Document database

![bg right:70% 40%](https://www.researchgate.net/publication/318353475/figure/fig2/AS:515130137427968@1499828003242/Integrated-cycles-data-in-the-MongoDB-document-format.png)

e.g. [MongoDB](https://www.mongodb.com/de)

## Time Series database

![bg right:70% 90%](https://i.stack.imgur.com/nKYTe.png)

e.g. [InfluxDB](https://www.influxdata.com/)

## Wide-column database

![bg right:70% 90%](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/images/OverloadGSIexample.png)

e.g. [DynamoDB](https://aws.amazon.com/dynamodb/)

## Graph database

![bg right:70%](https://techcrunch.com/wp-content/uploads/2020/02/cypher_graph_v2a.png?w=730&crop=1)

e.g. [neo4j](https://neo4j.com/)

## Search database

e.g. [Elasticsearch](https://www.elastic.co/de/elasticsearch/)

[Search Index data structures](https://en.wikipedia.org/wiki/Search_engine_indexing#Index_data_structures)

## Data Lake

- central data storage
- no pre-processing
- structured, semi-structured or unstructured data
- cheap
- flexible
- no reporting capabilities

## Data Warehouse

- central integrated databae
- pre-processing to achieve better data quality
- consistent data and consistent structured data model
- focus on query performance
- analyze data at multiple levels
- analyze historic data

## Horizontal Scaling

- [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem)
- [PACELC theorem](https://en.wikipedia.org/wiki/PACELC_theorem)

## Consistency vs Availability

[**ACID vs BASE consistency model**](https://www.educative.io/edpresso/what-are-acid-properties-in-a-database)

## Analytics vs Transactions

[**OLAP vs OLTP use case**](https://www.stitchdata.com/resources/oltp-vs-olap/)

## Managed, High-Availability, Low-Latency, Autoscaling Databases

(Examples)

- [DynamoDB](https://aws.amazon.com/de/dynamodb/)
- [Cosmos DB](https://azure.microsoft.com/de-de/services/cosmos-db/)
- [Google BigTable](https://cloud.google.com/bigtable)
- [Google Spanner](https://cloud.google.com/spanner)
- [Yugabyte DB](https://www.yugabyte.com/)

## Popularity

- [StackOverflow Survey 2020](https://insights.stackoverflow.com/survey/2020#technology-databases)
- [DB-Engines Ranking](https://db-engines.com/en/ranking)

## Query Examples

- Redis: [Link 1](https://redis.io/commands/hset)
- SQL: [Linl 1](https://www.codecademy.com/learn/learn-sql/modules/learn-sql-queries/cheatsheet)
- MongoDB: [Link 1](https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/#examples) | [Link 2](https://docs.mongodb.com/manual/reference/method/db.collection.update/#examples)
- Cypher: [Link 1](https://neo4j.com/developer/filtering-query-results/#cypher-where)
- Influx QL: [Link 1](https://docs.influxdata.com/influxdb/v1.8/concepts/crosswalk/#influxql) | [Link 2](https://docs.influxdata.com/influxdb/v1.8/introduction/get-started/#writing-and-exploring-data)

## Practical Intros

- [MongoDB Crash Course](https://www.youtube.com/watch?v=-56x56UppqQ)
- [Amazon DynamoDB Deep Dive](https://www.youtube.com/watch?v=HaEPXoXVf2k)
- [Intro to Graphs and Neo4j](https://www.youtube.com/watch?v=Go3P73-KV30)

# ✈ Thank you!

<style scoped>
  h1 { color: white; text-align: left; }
</style>

![bg](https://images.unsplash.com/photo-1595113230152-956f9b179e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)
