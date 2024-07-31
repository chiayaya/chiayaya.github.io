/*
 * GetAffiliateBrandList API Response Interface
 * https://edenred.atlassian.net/wiki/spaces/TWITDevelopment/pages/14013137102/Affiliate+-+GetAffiliateBrandList
 */ 
export interface AffiliateBrandResponseInterface {
    Id: number;
    Name: string;
    Logo: string;
    OrderCreationDays: number;
    OrderConfirmationDays: number;
    OrderPaymentDays: number;
    Commissions: AffiliateBrandCommissionInterface[]
}

export interface AffiliateBrandCommissionInterface {
    Name: string;
    Description: string;
    CommissionValue: number;
    CommissionType: CommissionTypeEnum;
}

export enum CommissionTypeEnum {
    Percentage = 1,
    Fixed = 2,
}