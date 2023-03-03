export type { ProtoGrpcType as InstrumentsType } from './proto/instruments';
export type { ProtoGrpcType as MarketdataType } from './proto/marketdata';
export type { ProtoGrpcType as OrdersType } from './proto/orders';
export type { ProtoGrpcType as OperationsType } from './proto/operations';
export type { ProtoGrpcType as SandboxType } from './proto/sandbox';
export type { ProtoGrpcType as StopordersType } from './proto/stoporders';
export type { ProtoGrpcType as UsersType } from './proto/users';

export type Client<Constructor> =  Constructor extends (new (...args: any) => infer R) ? R : null;
export type ServicePath<T extends Basic> = T['tinkoff']['public']['invest']['api']['contract']['v1'];
export type Basic = {
  tinkoff: {
    public: {
      invest: {
        api: {
          contract: {
            v1: {};
          };
        };
      };
    };
  };
};
