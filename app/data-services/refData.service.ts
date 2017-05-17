import {Injectable} from "@angular/core";
@Injectable()
export class RefDataService {

  getHikeClasses():string[]{
      return HIKE_CLASSES;
  }
}

const HIKE_CLASSES :string[]=[
    'Class A',
    'Class B',
    'Class E',
    'Class S',
    'Class V',
    'Downsman Open'
];