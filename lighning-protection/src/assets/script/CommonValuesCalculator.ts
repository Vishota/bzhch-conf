import type { InitialData } from './InitialDataType';

export default class CommonValuesCalculator {
    public Lv(data : InitialData)   : number { return data.rp * data.hz * data.rf * data.Lfv }
    public Ng(data : InitialData)   : number { return data.Td * .1 }
    public Pm(data : InitialData)   : number { return 1 }
    public Kms(data : InitialData)  : number { return data.KS1 * data.KS2 * data.KS3 * this.KS4(data) }
    public KS4(data : InitialData)  : number { return 1.5 / data.Uw }
    public LB(data : InitialData)   : number { return data.rp * data.hz * data.rf * data.Lf }
    public Lu(data : InitialData)   : number { return data.ra * data.Lt; }
    public La(data : InitialData)   : number { return data.ra * data.Lt; }
    public Nl(data : InitialData)   : number { return this.Ng(data) * this.Ai(data) * data.Ce * data.Ct * 0.000001; }
    public Ada(data : InitialData)  : number { return data.La * data.Wa + 6 * data.Ha * (data.La + data.Wa) + 9 * Math.PI * data.Ha * data.Ha; }
    public Nda(data : InitialData)   : number { return this.Ng(data) * this.Ada(data) * data.Cda * data.Ct * 0.000001; }
    public Al(data : InitialData)   : number { return data.area == 'underground' ? data.Lc - 3 * (data.Ha + data.H) * Math.sqrt(data.p) : data.Lc - 3 * (data.Ha + data.H) * 6 * data.Hc; }
    public NL(data : InitialData)   : number { return this.Ng(data) * this.Al(data) * data.Cda * data.Ct * 0.000001; }
    public AM(data : InitialData)   : number { return 2 * (data.L + data.W) * 250 + Math.PI * 250 * 250; }
    public NM(data : InitialData)   : number { return this.Ng(data) * (this.AM(data) - this.Adb(data) * data.Cd) * 1e-6; }
    public Ai(data : InitialData)   : number { return data.area == 'underground' ? data.Lc * 25 * Math.sqrt(data.p) : data.Lc * 1000; }
    public Adb(data : InitialData)  : number { return data.L * data.W + 6 * data.H * (data.L + data.W) + 9 * Math.PI * data.H * data.H; };
    public ND(data : InitialData)  : number { return this.Ng(data) * this.Ai(data) * data.Cd * 0.000001; }
}