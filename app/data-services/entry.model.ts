
export interface IEntry{
    id: number,
    ownerId: number,
    validated: boolean,
    class: string,
    prefStartTime: string,
    team: ITeam,
    serviceCrew: IServiceCrew[],
    contactInfo: IContactInfo

}

export interface ITeam{
    name: string,
    group: string,
    district: string,
    county: string,
    standardMobile: string,
    emergencyMobile: string,
    participants : IParticipant[]
}

export interface IParticipant{
    name: string,
    dob: string,
    gender: string
}

export interface IServiceCrew{
    name: string,
    mobile: string,
    from: string,
    to: string
}

export interface IContactInfo{
    adminContact:{
        name: string,
        address: string,
        telephone: string,
        mobile: string,
        email: string
    },
    emergencyContact:{
        name: string,
        address: string,
        telephone: string,
        mobile: string
    }
}