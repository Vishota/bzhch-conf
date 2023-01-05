import type { InitialData } from './InitialDataType';
import CommonValuesCalculator from './CommonValuesCalculator';
import RiskCalculator from './RiskCalculator';

export default class VerdictCalculator {
    private _risks = new RiskCalculator();
    isProtectionNeeded(data : InitialData)              : boolean { return this._risks.R1(data) >= 0.00001 }
    isStepVoltageProtectionNeeded(data : InitialData)   : boolean { return this._risks.RA(data) >= 0.00001 }
    isLightningRodNeeded(data : InitialData)            : boolean { return this._risks.RB(data) >= 0.00001 }
    isSPDNeeded(data : InitialData)                     : boolean { return this._risks.RC(data) >= 0.00001 }
    isShieldingNeeded(data : InitialData)               : boolean { return this._risks.RМ(data) >= 0.00001 }
    lightningProtectionLevel(data : InitialData) : string {
        data.Pb = parseFloat(data.Pb + '')
        if(data.Pb <= .02) return 'I';
        switch (data.Pb) {
            case 0.2:
                return 'IV'
            case 0.1:
                return 'III'
            case 0.05:
                return 'II'
            default:
                return '-'
        }
    }
    SPDLevel(data : InitialData) : string {
        data.Pc = parseFloat(data.Pc + '')
        if(data.Pc <= .01) return 'I';
        switch (data.Pc) {
            case 0.02:
                return 'II'
            case 0.03:
                return 'III-IV'
            default:
                return '-'
        }
    }

}