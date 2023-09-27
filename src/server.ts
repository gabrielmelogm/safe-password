import "reflect-metadata"

import path from "node:path"

import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { buildSchema } from "type-graphql"

import { PasswordsResolver } from "./resolvers/passwords-resolver"

async function main() {
  const schema = await buildSchema({
    resolvers: [
      PasswordsResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    validate: false
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await startStandaloneServer(server)
  console.log(`🚀 Server ready at ${url}`)
}

main()