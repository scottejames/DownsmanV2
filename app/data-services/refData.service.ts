import {Injectable} from "@angular/core";
@Injectable()
export class RefDataService {

  getHikeClasses():string[]{
      return HIKE_CLASSES;
  }
  getGenderList():string[]{
      return GENDER;
  }
  getDistrictList(): string []{
      return DISTRICTS;
  }
  getCountyList(): string [] {
      return COUNTY;
  }
  getTodoTime(): string [] {
      return TODO_TIME;
  }
}
const COUNTY: string [] = [
    'West Sussex'
]
const DISTRICTS : string [] = [
    'Adur Valley',
    'Arundel & Littlehampton',
    'Bognor Regis',
    'Chichester',
    'Crawley',
    'East Grinstead',
    'Horsham Weald',
    'Horsham West',
    'Mid Sussex',
    'Petworth & Pulborough',
    'Worthing'
]
const GENDER : string[] = [
    "male",
    "female"
]
const HIKE_CLASSES :string[]=[
    'Class A',
    'Class B',
    'Class E',
    'Class S',
    'Class V',
    'Downsman Open'
];

const TODO_TIME : string []= [
    'Pre',
    'Post',
    'N/a'
]