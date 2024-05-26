import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numOfGeneratedIds = 0;

  private validIdRegex = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validIdRegex.test(prefix)) {
      throw Error(`Prefix can not be empty or init with number`);
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
