export class User{
  constructor(public email: string,
              public name: string,
              private password: string){}

  matches(another: User): boolean {
    return another !== undefined &&
    another.email === this.email &&
    another.password === this.password
  }
}

export const users:{[key:string]: User} = {
  "leonalves@msn.com": new User('leonalves@msn.com', 'leonalves', 'Nanda2008'),
  "nanda@msn.com": new User('nanda@msn.com', 'nanda', '221278'),
}
