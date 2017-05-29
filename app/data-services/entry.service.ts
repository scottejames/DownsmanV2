import {Injectable} from "@angular/core";
import {IEntry} from './entry.model'
import {UserService} from "./user.service";
import {IUser} from "./user.model";
@Injectable()
export class EntryService {
    constructor(private userService: UserService) {

    }

    getEntryById(id: number): IEntry {
        let e: any = ENTRIES.find(t => t.id === id);
        return e;
    }

    getEntries(organiser: IUser): IEntry[] {
        console.log('getting entries for ' + organiser.userName)
        if (organiser == null)
            return null;
        else
            return ENTRIES.filter(e => e.ownerId === organiser.id);
    }

    addEntry(entry: IEntry) {
        if (!entry.id) {
            entry.id = this.getNextId();
        } else {
            this.delete(entry.id);
        }

        ENTRIES.push(entry);

    }

    updateEntry(entry: IEntry) {
        console.error("not implemented")
    }

    private getNextId(): number {
        const nextId = Math.max.apply(null, ENTRIES.map(s => s.id)) + 1;
        return nextId
    }

    delete(id: number) {
        ENTRIES = ENTRIES.filter(e => e.id != id);
    }

    _getAllEntries() {
        return ENTRIES;
    }
}


var ENTRIES: IEntry[] = [{
    id: 1,
    ownerId: 1,
    validated: false,
    class: 'Downsman Open',
    prefStartTime: '10.00',
    team: {
        name: 'hatters',
        group: '10th haywards heath',
        district: 'mid sussex',
        county: 'West Sussex',
        standardMobile: '011111',
        emergencyMobile: '100000',
        participants: [{
            name: 'Tom',
            dob: '2003-05-12',
            gender: 'male'
        }, {
            name: 'Dick',
            dob: '2002-11-12',
            gender: 'male'
        }, {
            name: 'Harry',
            dob: '2003-10-12',
            gender: 'male'
        }, {
            name: 'Joan',
            dob: '2003-05-14',
            gender: 'female'
        }]
    },
    serviceCrew: [{
        name: 'Fiona',
        mobile: '999999',
        from: 'start',
        to: 'middle'
    }, {
        name: 'Joana',
        mobile: '555555',
        from: 'middle',
        to: 'end'
    }],
    contactInfo: {
        adminContact: {
            name: 'Scott James',
            address: '8 Harvesters',
            telephone: '111111',
            mobile: '999999',
            email: 'scottejames@gmail.com'
        },
        emergencyContact: {
            name: 'Anna James',
            address: '9 Harvesters',
            telephone: '2222222',
            mobile: '333333333'
        }
    }
}, {
    id: 2,
    ownerId: 1,
    validated: false,
    class: 'Downsman Open',
    prefStartTime: '10.00',
    team: {
        name: 'Frindge',
        group: '10th haywards heath',
        district: 'mid sussex',
        county: 'sussex',
        standardMobile: '011111',
        emergencyMobile: '100000',
        participants: [{
            name: 'Tom',
            dob: '2003-05-12',
            gender: 'male'
        }, {
            name: 'Dick',
            dob: '2002-11-12',
            gender: 'male'
        }, {
            name: 'Harry',
            dob: '2003-10-12',
            gender: 'male'
        }, {
            name: 'Joan',
            dob: '2003-05-14',
            gender: 'female'
        }]
    },
    serviceCrew: [{
        name: 'Fiona',
        mobile: '999999',
        from: 'start',
        to: 'middle'
    }, {
        name: 'Joana',
        mobile: '555555',
        from: 'middle',
        to: 'end'
    }],
    contactInfo: {
        adminContact: {
            name: 'Scott James',
            address: '8 Harvesters',
            telephone: '111111',
            mobile: '999999',
            email: 'scottejames@gmail.com'
        },
        emergencyContact: {
            name: 'Anna James',
            address: '9 Harvesters',
            telephone: '2222222',
            mobile: '333333333'
        }
    }
}, {
    id: 3,
    ownerId: 1,
    validated: false,
    class: 'Downsman Open',
    prefStartTime: '10.00',
    team: {
        name: 'Gulls',
        group: '10th haywards heath',
        district: 'mid sussex',
        county: 'sussex',
        standardMobile: '011111',
        emergencyMobile: '100000',
        participants: [{
            name: 'Tom',
            dob: '2003-05-12',
            gender: 'male'
        }, {
            name: 'Dick',
            dob: '2002-11-12',
            gender: 'male'
        }, {
            name: 'Harry',
            dob: '2003-10-12',
            gender: 'male'
        }, {
            name: 'Joan',
            dob: '2003-05-14',
            gender: 'female'
        }]
    },
    serviceCrew: [{
        name: 'Fiona',
        mobile: '999999',
        from: 'start',
        to: 'middle'
    }, {
        name: 'Joana',
        mobile: '555555',
        from: 'middle',
        to: 'end'
    }],
    contactInfo: {
        adminContact: {
            name: 'Scott James',
            address: '8 Harvesters',
            telephone: '111111',
            mobile: '999999',
            email: 'scottejames@gmail.com'
        },
        emergencyContact: {
            name: 'Anna James',
            address: '9 Harvesters',
            telephone: '2222222',
            mobile: '333333333'
        }
    }
}, {
    id: 4,
    ownerId: 1,
    validated: false,
    class: 'Downsman Open',
    prefStartTime: '10.00',
    team: {
        name: 'Doomed',
        group: '10th haywards heath',
        district: 'mid sussex',
        county: 'sussex',
        standardMobile: '011111',
        emergencyMobile: '100000',
        participants: [{
            name: 'Tom',
            dob: '2003-05-12',
            gender: 'male'
        }, {
            name: 'Dick',
            dob: '2002-11-12',
            gender: 'male'
        }, {
            name: 'Harry',
            dob: '2003-10-12',
            gender: 'male'
        }, {
            name: 'Joan',
            dob: '2003-05-14',
            gender: 'female'
        }]
    },
    serviceCrew: [{
        name: 'Fiona',
        mobile: '999999',
        from: 'start',
        to: 'middle'
    }, {
        name: 'Joana',
        mobile: '555555',
        from: 'middle',
        to: 'end'
    }],
    contactInfo: {
        adminContact: {
            name: 'Scott James',
            address: '8 Harvesters',
            telephone: '111111',
            mobile: '999999',
            email: 'scottejames@gmail.com'
        },
        emergencyContact: {
            name: 'Anna James',
            address: '9 Harvesters',
            telephone: '2222222',
            mobile: '333333333'
        }
    }
    },{
    id: 5,
    ownerId: 3,
    validated: false,
    class: 'Downsman Open',
    prefStartTime: '10.00',
    team: {
        name: 'SomeOneElse',
        group: '10th haywards heath',
        district: 'mid sussex',
        county: 'sussex',
        standardMobile: '011111',
        emergencyMobile: '100000',
        participants: [{
            name: 'Tom',
            dob: '2003-05-12',
            gender: 'male'
        }, {
            name: 'Dick',
            dob: '2002-11-12',
            gender: 'male'
        }, {
            name: 'Harry',
            dob: '2003-10-12',
            gender: 'male'
        }, {
            name: 'Joan',
            dob: '2003-05-14',
            gender: 'female'
        }]
    },
    serviceCrew: [{
        name: 'Fiona',
        mobile: '999999',
        from: 'start',
        to: 'middle'
    }, {
        name: 'Joana',
        mobile: '555555',
        from: 'middle',
        to: 'end'
    }],
    contactInfo: {
        adminContact: {
            name: 'Scott James',
            address: '8 Harvesters',
            telephone: '111111',
            mobile: '999999',
            email: 'scottejames@gmail.com'
        },
        emergencyContact: {
            name: 'Anna James',
            address: '9 Harvesters',
            telephone: '2222222',
            mobile: '333333333'
        }
    }
}]