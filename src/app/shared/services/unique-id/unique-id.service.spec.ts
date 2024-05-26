import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
   should generate a unique id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix(`app`);

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
   should not generate duplicate IDs when called multiple times`, () => {
    // First Approach
    // const firstId = service.generateUniqueIdWithPrefix(`app`);
    // const secondId = service.generateUniqueIdWithPrefix(`app`);
    // expect(firstId).not.toEqual(secondId);

    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix(`app`));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw error when called with empty or number param`, () => {
    const emptyValues = [null, undefined, '', '1', '0'];

    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Value is: ${emptyValue}`)
        .toThrow();
    });

    // These two approachs are valid
    // expect(() => service.generateUniqueIdWithPrefix(null)).toThrow();
    // expect(() => service.generateUniqueIdWithPrefix(undefined)).toThrow();
    // expect(() => service.generateUniqueIdWithPrefix('')).toThrow();
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
   should return the number of generated ids when called`, () => {
    service.generateUniqueIdWithPrefix(`app`);
    service.generateUniqueIdWithPrefix(`app`);

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});
