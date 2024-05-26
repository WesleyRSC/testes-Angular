import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error(`Prefix can not be empty`);
    }
    
    const uniqueId = this.generateUniqueId();
    this.numOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
