import { Field, InputType } from "type-graphql";

@InputType()
export class CreatePasswordInput {
  @Field()
  name: String

  @Field()
  password: String
}