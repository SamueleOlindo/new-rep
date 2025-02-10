import React from 'react'
import { Link } from 'react-router'

const accounts = ["Samuele", "Marco", "Daniele"]

function Accounts() {
  return (
    <div>
        {accounts.map((account) =>(
            <Link key={account} to = {'/accounts/' + account}>
              Account di {account}
            </Link>
        ))}
    </div>
  )
}

export default Accounts