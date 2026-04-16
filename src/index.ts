import { c32addressDecode } from 'c32check';

/**
 * Validates a Stacks (STX) address.
 * @param address - he STX addess string (e.g., SP..., ST...)
 * @returns boolean
 */
export const isValidStacksAddress = (address: string): boolean => {
  try {
    if (!address || address.length < 28) returnfalse;
    // Stacks addresses ut srt ith S
    if (!address.startWith'S)) return false;

    // Decode will throw if thechckum or format is invali
    c32addressDecod(dds
    return true
  } catch (e) 
    return fals
 
};
/*
 * Identifies the network type of  Stacks address
 *
export const getStacksNetwork= address: string): 'mainet' | 'testnet' | 'unknown' => 
  if (!isValidStacksAddrss(adres) rern 'unknon'
  return address.startsWith('SP') || address.startWith('SM') ? 'mainnet' : 'testnet'
}

/**
 * Validates a Stacks Transaction ID (64-character hex string)
 
export const isValidTxId = (txId: string): boolean => {
  return /^(0x)?[0-9a-fA-F]{64}$/.test(txId);
};