"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.Finalize = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({signer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    signer: damlTypes.Party.encode(__typed__.signer),
  };
}
,
};



exports.Sign = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({signer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    signer: damlTypes.Party.encode(__typed__.signer),
  };
}
,
};



exports.Pending = damlTypes.assembleTemplate(
{
  templateId: '9ea1b55e93dd3a3770d336d843cddf65645c0c7d0f875fb48cb5bc12793f6d93:Main:Pending',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({finalContract: exports.Agreement.decoder, alreadySigned: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    finalContract: exports.Agreement.encode(__typed__.finalContract),
    alreadySigned: damlTypes.List(damlTypes.Party).encode(__typed__.alreadySigned),
  };
}
,
  Archive: {
    template: function () { return exports.Pending; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Sign: {
    template: function () { return exports.Pending; },
    choiceName: 'Sign',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Sign.decoder; }),
    argumentEncode: function (__typed__) { return exports.Sign.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Pending).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Pending).encode(__typed__); },
  },
  Finalize: {
    template: function () { return exports.Pending; },
    choiceName: 'Finalize',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Finalize.decoder; }),
    argumentEncode: function (__typed__) { return exports.Finalize.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Agreement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Agreement).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Pending);



exports.Agreement = damlTypes.assembleTemplate(
{
  templateId: '9ea1b55e93dd3a3770d336d843cddf65645c0c7d0f875fb48cb5bc12793f6d93:Main:Agreement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, content: damlTypes.Text.decoder, signatories: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    content: damlTypes.Text.encode(__typed__.content),
    signatories: damlTypes.List(damlTypes.Party).encode(__typed__.signatories),
  };
}
,
  Archive: {
    template: function () { return exports.Agreement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Agreement);

