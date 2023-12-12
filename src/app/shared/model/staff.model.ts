import {Skill} from "./skill.model";

export class Staff {

  constructor(public id?: number, public name?: string, public nick?: string, public picture?: string, public skills?: Skill) {
  }
}
