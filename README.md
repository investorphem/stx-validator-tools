# STX Validator Tools 🛠️

A lightweight, zero-bloat TypeScript library for validating Stacks (STX) blockchain primitives.

## Features
- ✅ Validate **Mainnet (SP)** and **Testnet (ST)** addresses.
- 🔍 Detect network type from an address string.
- ⚡ Validate Transaction IDs (TxID).
- 📦 Fully typed with TypeScript.

## Installation
```bash
npm install @investorphem/stx-validator-tools
```

## Usage
```typescript
import { isValidStacksAddress, getStacksNetwork } from '@investorphem/stx-validator-tools';

const addr = "SP3FG...Z8B";
if (isValidStacksAddress(addr)) {
  console.log(getStacksNetwork(addr)); // "mainnet"
}
```
