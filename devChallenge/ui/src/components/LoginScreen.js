import React from 'react'
import {DamlLedger, useLedger, useParty} from '@daml/react'
import { Pending } from '../../daml.js/devChallenge-0.0.1/lib/Main/module'

const LoginScreen = () => {
    const party=useParty()
    const ledger=useLedger()
    console.log(party)
    console.log(ledger)

    const pending = {doc:"hellooo",}

    const finalContract = {owner:party, content:"this is content",}
    const newContract =  ledger.create(Pending, pending)

    console.log(newContract)
  return (
    <div>LoginScreen</div>
  )
}

export default LoginScreen