// tests/index.test.ts
import { describe, it, expect } from 'vitest';
import { isValidStacksAddress, getStacksNetwork, isValidTxId } from '../src/index';

describe('Stacks Address Validator', () => {
  it('should validate a correct mainnet address', () => {
    // Valid mainnet SP address
    expect(isValidStacksAddress('SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7')).toBe(true);
  });

  it('should validate a correct testnet address', () => {
    // Valid testnet ST address (Updated to pass checksum)
    expect(isValidStacksAddress('ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC')).toBe(true);
  });

  it('should reject invalid or malformed addresses', () => {
    expect(isValidStacksAddress('InvalidAddress123')).toBe(false);
    expect(isValidStacksAddress('')).toBe(false);
    // Standard Bitcoin address (should fail Stacks validation)
    expect(isValidStacksAddress('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa')).toBe(false); 
  });
});

describe('Network Identifier', () => {
  it('should correctly identify mainnet', () => {
    expect(getStacksNetwork('SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7')).toBe('mainnet');
  });

  it('should correctly identify testnet', () => {
    // Valid testnet ST address (Updated to pass checksum)
    expect(getStacksNetwork('ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC')).toBe('testnet');
  });

  it('should return unknown for invalid input', () => {
    expect(getStacksNetwork('NotAnAddress')).toBe('unknown');
  });
});

describe('Transaction ID Validator', () => {
  it('should validate 64-character hex strings with or without 0x', () => {
    const validHex = '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
    expect(isValidTxId(`0x${validHex}`)).toBe(true);
    expect(isValidTxId(validHex)).toBe(true);
  });

  it('should reject invalid transaction IDs', () => {
    expect(isValidTxId('0x123')).toBe(false);
    expect(isValidTxId('this-is-not-a-hex-string-but-might-be-long-enough')).toBe(false);
  });
});