export default class CabalClient {
    APP_NAME: string;
    oath: any;
    dataType: any;
    provider: any;
    chainId: any;
    user: any;
    ipfs: any;
    OathContract: any;
    DataTypeContract: any;
    constructor(_provider: any);
    init(_provider: any): Promise<void>;
    put(data_type_address: string, data: string): Promise<void>;
    get(user_wallet: string, reason: string, data_type_address: string, provider_address: string): Promise<void>;
    connect(service_wallet: string, data_type_address: string): Promise<void>;
    disconnect(service_wallet: string, data_type_address: string): Promise<void>;
}
