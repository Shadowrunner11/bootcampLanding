export interface IContact {
  name?: string;
  email?: string;
  phone: number;
}

export class Contact implements IContact {
  name?: string;
  email?: string;
  phone: number;

  constructor(phone: number, email?: string, name? : string){
    this.email = email
    this.name = name
    this.phone = phone
  }

  saveLocal(){
    if(this.email)
      localStorage.setItem('email', this.email)
  }
}
