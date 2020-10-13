import { RoleFactory } from "./RoleFactory";
import { RoleHarvester } from "./RoleHarvester";
export class WrapperCreep {
  public creepObj: Creep;
  private role: RoleHarvester;
  public constructor(creepObj: Creep, rf: RoleFactory) {
    this.creepObj = creepObj;
    this.role = rf.getRole(this.creepObj.name) as RoleHarvester;
  }
  public run(): void {
    this.role.run();
  }
  public unregister() {
    this.role.unregister();
    return;
  }
}
