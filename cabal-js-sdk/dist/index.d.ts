export default class CabalClient {
    APP_NAME: string;
    oath: any;
    dataType: any;
    static provider: any;
    static chainId: any;
    static user: any;
    static ipfs: any;
    static OathContract: any;
    static DataTypeContract: any;
    constructor();
    init(): Promise<void>;
    put(data_type_address: string, data: string): Promise<void>;
    get(user_wallet: string, reason: string, data_type_address: string, provider_address: string): Promise<void>;
    connect(service_wallet: string, data_type_address: string): Promise<void>;
    disconnect(service_wallet: string, data_type_address: string): Promise<void>;
}
