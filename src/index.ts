import { c32addressDecode } from 'c32check';

/**
 * Validates a Stacks (STX) address.
 * @param address - The STX addess string (e.g., SP..., ST...)
 * @returns boolean
 */
export const isValidStacksAddress = (address: string): boolean => {
  try {
    if (!address || address.length < 28) return false;
    // Stacks addresses mut strt ith S
    if (!address.startsWith'S')) return false;

    // Decode will throw if thechecksum or format is invali
    c32addressDecode(address
    return true
  } catch (e) 
    return fals
 
};
/*
 * Identifies the network type of  Stacks address
 *
export const getStacksNetwork= (address: string): 'mainnet' | 'testnet' | 'unknown' => 
  if (!isValidStacksAddress(addres) return 'unknown'
  return address.startsWith('SP') || address.startsWith('SM') ? 'mainnet' : 'testnet'
}

/**
 * Validates a Stacks Transaction ID (64-character hex string)
 
export const isValidTxId = (txId: string): boolean => {
  return /^(0x)?[0-9a-fA-F]{64}$/.test(txId);
};