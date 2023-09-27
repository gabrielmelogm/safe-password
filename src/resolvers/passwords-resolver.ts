import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { CreatePasswordInput } from "../dtos/inputs/createPassword-input";
import { Password } from "../dtos/models/Password";

@Resolver(() => Password)
export class PasswordsResolver {
  constructor(private passwords: Password[] = []) {}

  @Query(() => [Password])
  async getPassword(): Promise<Password[]> {
    return this.passwords
  }

  @Mutation(() => Password)
  async createPassword(@Arg('data') data: CreatePasswordInput): Promise<Password> {
    this.passwords.push(data)
    return data
  }
}