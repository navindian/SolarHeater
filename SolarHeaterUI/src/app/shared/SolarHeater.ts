export class SolarHeater{
    solarHeaterId?:number;
    distributorName:string;
    purchaseDate:Date;
    installationDate:Date;
    customerId:number;
    message?:string;
    constructor(distributorName:string,purchaseDate:Date,installationDate:Date,customerId:number,solarHeaterId?:number,message?:string){
        this.distributorName=distributorName;
        this.purchaseDate=purchaseDate;
        this.installationDate=installationDate;
        this.customerId=customerId;
        this.message=message;
        this.solarHeaterId=solarHeaterId;
    };
}