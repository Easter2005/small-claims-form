import Court from './interfaces/Court';
import Division from './interfaces/Division';
import Doctitle from './interfaces/doctitle';
import {DivisionService} from './services/division.service';
import {CourtService} from './services/court.service';
import {DoctitleService} from './services/doctitle.service';
const SHARED_PROVIDERS: any[] = [
    DivisionService,
    CourtService,
    DoctitleService
];

export {
    Court,
    Division,
    Doctitle,
    DivisionService,
    CourtService,
    DoctitleService,
    SHARED_PROVIDERS
};