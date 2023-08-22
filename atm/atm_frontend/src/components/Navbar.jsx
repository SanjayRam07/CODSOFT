import React from 'react'

export default function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">ATM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" aria-current="page" href="/deposit">Deposit</a>
        <a class="nav-link" href="/withdraw">Withdraw</a>
        <a class="nav-link" href="/transfer">Transfer</a>
      </div>
    </div>
  </div>
</nav>
  )
}
