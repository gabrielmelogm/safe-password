import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Password {
  @Field()
  name: String

  @Field()
  password: String
}