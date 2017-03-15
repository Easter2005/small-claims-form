import Court from './interfaces/Court';
import Division from './interfaces/Division';
import Doctitle from './interfaces/doctitle';
import {DivisionService} from './services/division.service';
import {CourtService} from './services/court.service';
import {DoctitleService} from './services/doctitle.service';
import {JudgeService} from './services/judge.service';

const SHARED_PROVIDERS: any[] = [
    DivisionService,
    CourtService,
    DoctitleService,
    JudgeService
];

export {
    Court,
    Division,
    Doctitle,
    CourtService,
    DivisionService,
    DoctitleService,
    JudgeService,
    SHARED_PROVIDERS
};