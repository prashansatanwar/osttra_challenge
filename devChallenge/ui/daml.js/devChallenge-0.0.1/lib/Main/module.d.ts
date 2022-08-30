// Generated from Main.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Finalize = {
  signer: damlTypes.Party;
};

export declare const Finalize:
  damlTypes.Serializable<Finalize> & {
  }
;


export declare type Sign = {
  signer: damlTypes.Party;
};

export declare const Sign:
  damlTypes.Serializable<Sign> & {
  }
;


export declare type Pending = {
  finalContract: Agreement;
  alreadySigned: damlTypes.Party[];
};

export declare interface PendingInterface {
  Archive: damlTypes.Choice<Pending, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  Sign: damlTypes.Choice<Pending, Sign, damlTypes.ContractId<Pending>, undefined>;
  Finalize: damlTypes.Choice<Pending, Finalize, damlTypes.ContractId<Agreement>, undefined>;
}
export declare const Pending:
  damlTypes.Template<Pending, undefined, '9ea1b55e93dd3a3770d336d843cddf65645c0c7d0f875fb48cb5bc12793f6d93:Main:Pending'> & PendingInterface;

export declare namespace Pending {
  export type CreateEvent = damlLedger.CreateEvent<Pending, undefined, typeof Pending.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Pending, typeof Pending.templateId>
  export type Event = damlLedger.Event<Pending, undefined, typeof Pending.templateId>
  export type QueryResult = damlLedger.QueryResult<Pending, undefined, typeof Pending.templateId>
}



export declare type Agreement = {
  owner: damlTypes.Party;
  content: string;
  signatories: damlTypes.Party[];
};

export declare interface AgreementInterface {
  Archive: damlTypes.Choice<Agreement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
}
export declare const Agreement:
  damlTypes.Template<Agreement, undefined, '9ea1b55e93dd3a3770d336d843cddf65645c0c7d0f875fb48cb5bc12793f6d93:Main:Agreement'> & AgreementInterface;

export declare namespace Agreement {
  export type CreateEvent = damlLedger.CreateEvent<Agreement, undefined, typeof Agreement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Agreement, typeof Agreement.templateId>
  export type Event = damlLedger.Event<Agreement, undefined, typeof Agreement.templateId>
  export type QueryResult = damlLedger.QueryResult<Agreement, undefined, typeof Agreement.templateId>
}


