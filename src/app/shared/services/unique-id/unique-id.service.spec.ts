import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate a unique id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix(`app`);

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    //First Approach
    // const firstId = service.generateUniqueIdWithPrefix(`app`);
    // const secondId = service.generateUniqueIdWithPrefix(`app`);
    // expect(firstId).not.toEqual(secondId);

    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix(`app`));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generated ids when called`, () => {
    service.generateUniqueIdWithPrefix(`app`);
    service.generateUniqueIdWithPrefix(`app`);

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});
