# wallet-stellar 🪐

A simple crypto wallet built on the **Stellar** blockchain (testnet), made with **SvelteKit** and **TypeScript**.

It lets you create or import a Stellar account, fund it with test XLM, check your balance, and send payments — all from a small, self-contained web app.

## ✨ Features

- 🔑 **Create a new account** — generates a fresh Stellar keypair (public/secret key).
- 📥 **Import an existing account** — sign in with an existing secret key.
- 💧 **Fund with test XLM** — tops up the account via Stellar's [Friendbot](https://developers.stellar.org/docs/learn/fundamentals/networks#friendbot) (testnet faucet).
- 💰 **Check balances** — reads live balances from the Stellar Horizon testnet server.
- 💸 **Send payments** — builds, signs, and submits native XLM payment transactions.
- 🔔 Toast notifications and basic input validation for a smoother UX.

## 🛠️ Tech Stack

- [SvelteKit](https://kit.svelte.dev/) + TypeScript
- [stellar-sdk](https://www.npmjs.com/package/stellar-sdk) — account, transaction, and Horizon server handling
- Bootstrap 5 — UI styling
- svelte-routing — client-side routing
- svelte-toasts — notifications
- Vite / Vitest — build tooling and unit tests

## 📁 Project Structure

```
src/
├── routes/              # App views (Setup, Main, Warning) and view routing
├── components/          # AccountData, Transfer
├── elements/             # Alert, Toast
├── stellar-fuctions/     # Stellar SDK calls: createAccount, importAccount,
│                          # addFunds, getAccountBalances, sendPayment
└── utils/                # Shared store (keypair/session state) and helpers
```

## ▶️ Run locally

```bash
git clone https://github.com/nicolascarrica/wallet-stellar
cd wallet-stellar
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal.

## ⚠️ Note

This project runs entirely against the **Stellar testnet** (Horizon testnet + Friendbot). It does not use mainnet and is not intended to hold real funds — it was built as a learning project to understand wallet flows, key management, and blockchain transactions.

## 📌 Status

Personal project, built to practice integrating a blockchain SDK into a front-end app end-to-end (account creation, signing, and submitting transactions).
