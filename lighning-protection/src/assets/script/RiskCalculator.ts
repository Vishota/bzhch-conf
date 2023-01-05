import type { InitialData } from './InitialDataType';
import CommonValuesCalculator from './CommonValuesCalculator';

export default class RiskCalculator {
    private _common = new CommonValuesCalculator();
    RA(data: InitialData) : number { return this._common.ND(data) * this._common.La(data) * data.Pa }
    RB(data: InitialData) : number { return this._common.ND(data) * data.Pb * this._common.LB(data) }
    RC(data: InitialData) : number { return this._common.ND(data) * data.LcLmLo * data.Pc }
    RМ(data: InitialData) : number { return this._common.NM(data) * this._common.Pm(data) * data.LcLmLo }
    RU(data: InitialData) : number { return (this._common.NL(data) + this._common.Nda(data)) * data.Pu * this._common.Lu(data) }
    RV(data: InitialData) : number { return (this._common.NL(data) + this._common.Nda(data)) * data.Pv * this._common.Lv(data) }
    RW(data: InitialData) : number { return (this._common.NL(data) + this._common.Nda(data)) * data.Lw * data.Pw }
    RZ(data: InitialData) : number { return (this._common.Nl(data) - this._common.NL(data)) * data.Pz * data.LcLmLo }
    R1(data: InitialData) : number { return this.RA(data) + this.RB(data) + this.RC(data) + this.RМ(data) + this.RU(data) + this.RV(data) + this.RW(data) + this.RZ(data); }
}