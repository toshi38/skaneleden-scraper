import { GraphQLClient } from 'graphql-request'
import gql from 'graphql-tag';

const API = "https://api.graphcms.com/simple/v1/cjh2ft7w444a501069eb5u34u";
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjYwNzkyMzUsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqaDJmdDd3NDQ0YTUwMTA2OWViNXUzNHUiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqaDJrNmE1ODRnaGQwMTA2YnlrZTFnZ3MifQ.o1FhTMRZpwcJpVOudY4GY-qJEVELJCGzp9SsmP_ma8A";

const client = new GraphQLClient(API, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

function createTrack({id, name, title, slug, subtitle, text}) {
  let createMutation = gql`
  
  `
}
export default function populateCMS(infile) {

}
