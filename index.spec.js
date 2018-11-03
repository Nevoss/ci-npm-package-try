import { Somthing } from "./src/index";

describe('index', () => {
  it('should counstruct', () => {
    let somthing =  new Somthing('a');

    expect(somthing.some).toBe('a');
  });
});