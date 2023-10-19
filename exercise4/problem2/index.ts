class Name {
    firstName: string; 
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
        this.lastName = lastName.substring(0, 1).toUpperCase() + lastName.substring(1).toLowerCase();
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get initials(): string {
        return `${this.firstName[0]}.${this.lastName[0]}`;
    }
}

export default Name;
