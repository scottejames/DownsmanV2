import {Injectable} from "@angular/core";
import {IEntry} from './entry.model'
@Injectable()
export class EntryService {


    getEntryById(id: number) :IEntry{
        var e: any = ENTRIES.find(t => t.id === id);
        return e;
    }

    getEntries() {
        return ENTRIES;
    }

    addEntry(entry: IEntry){
        entry.id = this.getNextId();
        ENTRIES.push(entry);
    }
    updateEntry(entry: IEntry){
        console.error("not implemented")
    }

    private getNextId(): number {
        const nextId = Math.max.apply(null, ENTRIES.map(s => s.id)) + 1;
        return nextId
    }
}


const ENTRIES :IEntry[] = [{
    id: 1,
    class: 'S',
    prefStartTime: '10.00',
    team: {
        name: 'hatters',
        group: '10th haywards heath',
        district: 'mid sussex',
        county: 'sussex',
        standardMobile: '011111',
        emergencyMobile: '100000',
        participants: [{
            name: 'Tom',
            dob: '1 Jan 2010',
            sex: 'male'
        }, {
            name: 'Dick',
            dob: '1 Jan 2010',
            sex: 'male'
        }, {
            name: 'Harry',
            dob: '1 Jan 2010',
            sex: 'male'
        }, {
            name: 'Joan',
            dob: '1 Jan 2010',
            sex: 'female'
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