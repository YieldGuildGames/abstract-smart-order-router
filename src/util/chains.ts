import {
  ChainId,
  Currency,
  Ether,
  NativeCurrency,
  Token,
} from '@uniswap/sdk-core';

// WIP: Gnosis, Moonbeam
export const SUPPORTED_CHAINS: ChainId[] = [
  ChainId.MAINNET,
  ChainId.OPTIMISM,
  ChainId.OPTIMISM_GOERLI,
  ChainId.OPTIMISM_SEPOLIA,
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.ARBITRUM_SEPOLIA,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
  ChainId.SEPOLIA,
  ChainId.CELO_ALFAJORES,
  ChainId.CELO,
  ChainId.BNB,
  ChainId.AVALANCHE,
  ChainId.BASE,
  ChainId.BLAST,
  ChainId.ZORA,
  ChainId.ZKSYNC,
  ChainId.WORLDCHAIN,
  ChainId.UNICHAIN,
  ChainId.UNICHAIN_SEPOLIA,
  ChainId.MONAD_TESTNET,
  ChainId.BASE_SEPOLIA,
  ChainId.SONEIUM,
  2741 as ChainId, // Abstract mainnet
  11124 as ChainId, // Abstract testnet
  // Gnosis and Moonbeam don't yet have contracts deployed yet
];

export const V2_SUPPORTED = [
  ChainId.MAINNET,
  ChainId.SEPOLIA,
  ChainId.ARBITRUM_ONE,
  ChainId.OPTIMISM,
  ChainId.POLYGON,
  ChainId.BASE,
  ChainId.BNB,
  ChainId.AVALANCHE,
  ChainId.MONAD_TESTNET,
  ChainId.UNICHAIN_SEPOLIA,
  ChainId.UNICHAIN,
  ChainId.SONEIUM,
];

export const V4_SUPPORTED = [
  ChainId.MAINNET,
  ChainId.SEPOLIA,
  ChainId.ARBITRUM_ONE,
  ChainId.OPTIMISM,
  ChainId.POLYGON,
  ChainId.BASE,
  ChainId.BNB,
  ChainId.AVALANCHE,
  ChainId.MONAD_TESTNET,
  ChainId.UNICHAIN_SEPOLIA,
  ChainId.UNICHAIN,
  ChainId.SONEIUM,
];

export const MIXED_SUPPORTED = [
  ChainId.MAINNET,
  ChainId.SEPOLIA,
  ChainId.GOERLI,
  ChainId.BASE,
  ChainId.UNICHAIN,
  ChainId.BASE,
  ChainId.ARBITRUM_ONE,
  ChainId.POLYGON,
  ChainId.OPTIMISM,
  ChainId.AVALANCHE,
  ChainId.BNB,
  ChainId.WORLDCHAIN,
  ChainId.ZORA,
  ChainId.SONEIUM,
];

export const HAS_L1_FEE = [
  ChainId.OPTIMISM,
  ChainId.OPTIMISM_GOERLI,
  ChainId.OPTIMISM_SEPOLIA,
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.ARBITRUM_SEPOLIA,
  ChainId.BASE,
  ChainId.BASE_GOERLI,
  ChainId.BLAST,
  ChainId.ZORA,
  ChainId.WORLDCHAIN,
  ChainId.UNICHAIN_SEPOLIA,
  ChainId.MONAD_TESTNET,
  ChainId.UNICHAIN,
  ChainId.SONEIUM,
];

export const NETWORKS_WITH_SAME_UNISWAP_ADDRESSES = [
  ChainId.MAINNET,
  ChainId.GOERLI,
  ChainId.OPTIMISM,
  ChainId.ARBITRUM_ONE,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
];

export const ID_TO_CHAIN_ID = (id: number): ChainId => {
  switch (id) {
    case 1:
      return ChainId.MAINNET;
    case 5:
      return ChainId.GOERLI;
    case 11155111:
      return ChainId.SEPOLIA;
    case 56:
      return ChainId.BNB;
    case 10:
      return ChainId.OPTIMISM;
    case 420:
      return ChainId.OPTIMISM_GOERLI;
    case 11155420:
      return ChainId.OPTIMISM_SEPOLIA;
    case 42161:
      return ChainId.ARBITRUM_ONE;
    case 421613:
      return ChainId.ARBITRUM_GOERLI;
    case 421614:
      return ChainId.ARBITRUM_SEPOLIA;
    case 137:
      return ChainId.POLYGON;
    case 80001:
      return ChainId.POLYGON_MUMBAI;
    case 42220:
      return ChainId.CELO;
    case 44787:
      return ChainId.CELO_ALFAJORES;
    case 100:
      return ChainId.GNOSIS;
    case 1284:
      return ChainId.MOONBEAM;
    case 43114:
      return ChainId.AVALANCHE;
    case 8453:
      return ChainId.BASE;
    case 84531:
      return ChainId.BASE_GOERLI;
    case 84532:
      return ChainId.BASE_SEPOLIA;
    case 81457:
      return ChainId.BLAST;
    case 7777777:
      return ChainId.ZORA;
    case 324:
      return ChainId.ZKSYNC;
    case 480:
      return ChainId.WORLDCHAIN;
    case 1301:
      return ChainId.UNICHAIN_SEPOLIA;
    case 10143:
      return ChainId.MONAD_TESTNET;
    case 130:
      return ChainId.UNICHAIN;
    case 1868:
      return ChainId.SONEIUM;
    case 2741:
      return 2741 as ChainId; // Abstract mainnet
    case 11124:
      return 11124 as ChainId; // Abstract testnet
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export enum ChainName {
  MAINNET = 'mainnet',
  GOERLI = 'goerli',
  SEPOLIA = 'sepolia',
  OPTIMISM = 'optimism-mainnet',
  OPTIMISM_GOERLI = 'optimism-goerli',
  OPTIMISM_SEPOLIA = 'optimism-sepolia',
  ARBITRUM_ONE = 'arbitrum-mainnet',
  ARBITRUM_GOERLI = 'arbitrum-goerli',
  ARBITRUM_SEPOLIA = 'arbitrum-sepolia',
  POLYGON = 'polygon-mainnet',
  POLYGON_MUMBAI = 'polygon-mumbai',
  CELO = 'celo-mainnet',
  CELO_ALFAJORES = 'celo-alfajores',
  GNOSIS = 'gnosis-mainnet',
  MOONBEAM = 'moonbeam-mainnet',
  BNB = 'bnb-mainnet',
  AVALANCHE = 'avalanche-mainnet',
  BASE = 'base-mainnet',
  BASE_GOERLI = 'base-goerli',
  BASE_SEPOLIA = 'base-sepolia',
  BLAST = 'blast-mainnet',
  ZORA = 'zora-mainnet',
  ZKSYNC = 'zksync-mainnet',
  ABSTRACT = 'abstract-mainnet',
  ABSTRACT_TESTNET = 'abstract-testnet',
  WORLDCHAIN = 'worldchain-mainnet',
  UNICHAIN_SEPOLIA = 'unichain-sepolia',
  UNICHAIN = 'unichain-mainnet',
  MONAD_TESTNET = 'monad-testnet',
  SONEIUM = 'soneium-mainnet',
}

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVALANCHE = 'AVAX',
  MONAD = 'MON',
  ABSTRACT = 'ETH',
}

export const NATIVE_NAMES_BY_ID: { [chainId: number]: string[] } = {
  [ChainId.MAINNET]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.GOERLI]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.OPTIMISM]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.OPTIMISM_GOERLI]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.OPTIMISM_SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.ARBITRUM_ONE]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.ARBITRUM_GOERLI]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.ARBITRUM_SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.POLYGON]: ['MATIC', '0x0000000000000000000000000000000000001010'],
  [ChainId.POLYGON_MUMBAI]: [
    'MATIC',
    '0x0000000000000000000000000000000000001010',
  ],
  [ChainId.CELO]: ['CELO'],
  [ChainId.CELO_ALFAJORES]: ['CELO'],
  [ChainId.GNOSIS]: ['XDAI'],
  [ChainId.MOONBEAM]: ['GLMR'],
  [ChainId.BNB]: ['BNB', 'BNB', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
  [ChainId.AVALANCHE]: [
    'AVAX',
    'AVALANCHE',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.BASE]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.BLAST]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.ZORA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.ZKSYNC]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.WORLDCHAIN]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.UNICHAIN_SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.MONAD_TESTNET]: [
    'MON',
    'MONAD',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.BASE_SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.UNICHAIN]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.SONEIUM]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [2741]: ['ETH', 'ETHER', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
  [11124]: ['ETH', 'ETHER', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
};

export const NATIVE_CURRENCY: { [chainId: number]: NativeCurrencyName } = {
  [ChainId.MAINNET]: NativeCurrencyName.ETHER,
  [ChainId.GOERLI]: NativeCurrencyName.ETHER,
  [ChainId.SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.OPTIMISM]: NativeCurrencyName.ETHER,
  [ChainId.OPTIMISM_GOERLI]: NativeCurrencyName.ETHER,
  [ChainId.OPTIMISM_SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.ARBITRUM_ONE]: NativeCurrencyName.ETHER,
  [ChainId.ARBITRUM_GOERLI]: NativeCurrencyName.ETHER,
  [ChainId.ARBITRUM_SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.POLYGON]: NativeCurrencyName.MATIC,
  [ChainId.POLYGON_MUMBAI]: NativeCurrencyName.MATIC,
  [ChainId.CELO]: NativeCurrencyName.CELO,
  [ChainId.CELO_ALFAJORES]: NativeCurrencyName.CELO,
  [ChainId.GNOSIS]: NativeCurrencyName.GNOSIS,
  [ChainId.MOONBEAM]: NativeCurrencyName.MOONBEAM,
  [ChainId.BNB]: NativeCurrencyName.BNB,
  [ChainId.AVALANCHE]: NativeCurrencyName.AVALANCHE,
  [ChainId.BASE]: NativeCurrencyName.ETHER,
  [ChainId.BLAST]: NativeCurrencyName.ETHER,
  [ChainId.ZORA]: NativeCurrencyName.ETHER,
  [ChainId.ZKSYNC]: NativeCurrencyName.ETHER,
  [ChainId.WORLDCHAIN]: NativeCurrencyName.ETHER,
  [ChainId.UNICHAIN_SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.MONAD_TESTNET]: NativeCurrencyName.MONAD,
  [ChainId.BASE_SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.UNICHAIN]: NativeCurrencyName.ETHER,
  [ChainId.SONEIUM]: NativeCurrencyName.ETHER,
  [2741]: NativeCurrencyName.ABSTRACT,
  [11124]: NativeCurrencyName.ABSTRACT,
};

export const ID_TO_NETWORK_NAME = (id: number): ChainName => {
  switch (id) {
    case 1:
      return ChainName.MAINNET;
    case 5:
      return ChainName.GOERLI;
    case 11155111:
      return ChainName.SEPOLIA;
    case 56:
      return ChainName.BNB;
    case 10:
      return ChainName.OPTIMISM;
    case 420:
      return ChainName.OPTIMISM_GOERLI;
    case 11155420:
      return ChainName.OPTIMISM_SEPOLIA;
    case 42161:
      return ChainName.ARBITRUM_ONE;
    case 421613:
      return ChainName.ARBITRUM_GOERLI;
    case 421614:
      return ChainName.ARBITRUM_SEPOLIA;
    case 137:
      return ChainName.POLYGON;
    case 80001:
      return ChainName.POLYGON_MUMBAI;
    case 42220:
      return ChainName.CELO;
    case 44787:
      return ChainName.CELO_ALFAJORES;
    case 100:
      return ChainName.GNOSIS;
    case 1284:
      return ChainName.MOONBEAM;
    case 43114:
      return ChainName.AVALANCHE;
    case 8453:
      return ChainName.BASE;
    case 84531:
      return ChainName.BASE_GOERLI;
    case 84532:
      return ChainName.BASE_SEPOLIA;
    case 81457:
      return ChainName.BLAST;
    case 7777777:
      return ChainName.ZORA;
    case 324:
      return ChainName.ZKSYNC;
    case 480:
      return ChainName.WORLDCHAIN;
    case 1301:
      return ChainName.UNICHAIN_SEPOLIA;
    case 130:
      return ChainName.UNICHAIN;
    case 10143:
      return ChainName.MONAD_TESTNET;
    case 1868:
      return ChainName.SONEIUM;
    case 2741:
      return ChainName.ABSTRACT;
    case 11124:
      return ChainName.ABSTRACT_TESTNET;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export const CHAIN_IDS_LIST = Object.values(ChainId).map((c) =>
  c.toString()
) as string[];

export const ID_TO_PROVIDER = (id: ChainId): string => {
  switch (id) {
    case ChainId.MAINNET:
      return process.env.JSON_RPC_PROVIDER!;
    case ChainId.GOERLI:
      return process.env.JSON_RPC_PROVIDER_GORLI!;
    case ChainId.SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_SEPOLIA!;
    case ChainId.OPTIMISM:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM!;
    case ChainId.OPTIMISM_GOERLI:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM_GOERLI!;
    case ChainId.OPTIMISM_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM_SEPOLIA!;
    case ChainId.ARBITRUM_ONE:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_ONE!;
    case ChainId.ARBITRUM_GOERLI:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_GOERLI!;
    case ChainId.ARBITRUM_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_SEPOLIA!;
    case ChainId.POLYGON:
      return process.env.JSON_RPC_PROVIDER_POLYGON!;
    case ChainId.POLYGON_MUMBAI:
      return process.env.JSON_RPC_PROVIDER_POLYGON_MUMBAI!;
    case ChainId.CELO:
      return process.env.JSON_RPC_PROVIDER_CELO!;
    case ChainId.CELO_ALFAJORES:
      return process.env.JSON_RPC_PROVIDER_CELO_ALFAJORES!;
    case ChainId.BNB:
      return process.env.JSON_RPC_PROVIDER_BNB!;
    case ChainId.AVALANCHE:
      return process.env.JSON_RPC_PROVIDER_AVALANCHE!;
    case ChainId.BASE:
      return process.env.JSON_RPC_PROVIDER_BASE!;
    case ChainId.BLAST:
      return process.env.JSON_RPC_PROVIDER_BLAST!;
    case ChainId.ZORA:
      return process.env.JSON_RPC_PROVIDER_ZORA!;
    case ChainId.ZKSYNC:
      return process.env.JSON_RPC_PROVIDER_ZKSYNC!;
    case ChainId.WORLDCHAIN:
      return process.env.JSON_RPC_PROVIDER_WORLDCHAIN!;
    case ChainId.UNICHAIN_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_UNICHAIN_SEPOLIA!;
    case ChainId.MONAD_TESTNET:
      return process.env.JSON_RPC_PROVIDER_MONAD_TESTNET!;
    case ChainId.BASE_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_BASE_SEPOLIA!;
    case ChainId.UNICHAIN:
      return process.env.JSON_RPC_PROVIDER_UNICHAIN!;
    case ChainId.SONEIUM:
      return process.env.JSON_RPC_PROVIDER_SONEIUM!;
    default:
      throw new Error(`Chain id: ${id} not supported`);
  }
};

export const WRAPPED_NATIVE_CURRENCY: { [chainId in ChainId]: Token } & {
  [key: number]: Token;
} = {
  [ChainId.MAINNET]: new Token(
    1,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GOERLI]: new Token(
    5,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.SEPOLIA]: new Token(
    11155111,
    '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BNB]: new Token(
    56,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.OPTIMISM]: new Token(
    ChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISM_GOERLI]: new Token(
    ChainId.OPTIMISM_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISM_SEPOLIA]: new Token(
    ChainId.OPTIMISM_SEPOLIA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_ONE]: new Token(
    ChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_GOERLI]: new Token(
    ChainId.ARBITRUM_GOERLI,
    '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_SEPOLIA]: new Token(
    ChainId.ARBITRUM_SEPOLIA,
    '0x980B62Da83eFf3D4576C647993b0c1D7faf17c73',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.POLYGON]: new Token(
    ChainId.POLYGON,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped MATIC'
  ),
  [ChainId.POLYGON_MUMBAI]: new Token(
    ChainId.POLYGON_MUMBAI,
    '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    18,
    'WMATIC',
    'Wrapped MATIC'
  ),

  // The Celo native currency 'CELO' implements the erc-20 token standard
  [ChainId.CELO]: new Token(
    ChainId.CELO,
    '0x471EcE3750Da237f93B8E339c536989b8978a438',
    18,
    'CELO',
    'Celo native asset'
  ),
  [ChainId.CELO_ALFAJORES]: new Token(
    ChainId.CELO_ALFAJORES,
    '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
    18,
    'CELO',
    'Celo native asset'
  ),
  [ChainId.GNOSIS]: new Token(
    ChainId.GNOSIS,
    '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
    18,
    'WXDAI',
    'Wrapped XDAI on Gnosis'
  ),
  [ChainId.MOONBEAM]: new Token(
    ChainId.MOONBEAM,
    '0xAcc15dC74880C9944775448304B263D191c6077F',
    18,
    'WGLMR',
    'Wrapped GLMR'
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [ChainId.BASE]: new Token(
    ChainId.BASE,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BASE_GOERLI]: new Token(
    ChainId.BASE_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ROOTSTOCK]: new Token(
    ChainId.ROOTSTOCK,
    '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
    18,
    'WRBTC',
    'Wrapped BTC'
  ),
  [ChainId.ZORA]: new Token(
    ChainId.ZORA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ZORA_SEPOLIA]: new Token(
    ChainId.ZORA_SEPOLIA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BLAST]: new Token(
    ChainId.BLAST,
    '0x4300000000000000000000000000000000000004',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ZKSYNC]: new Token(
    ChainId.ZKSYNC,
    '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.WORLDCHAIN]: new Token(
    ChainId.WORLDCHAIN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.UNICHAIN_SEPOLIA]: new Token(
    ChainId.UNICHAIN_SEPOLIA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.UNICHAIN]: new Token(
    ChainId.UNICHAIN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.MONAD_TESTNET]: new Token(
    ChainId.MONAD_TESTNET,
    '0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701',
    18,
    'WMON',
    'Wrapped Monad'
  ),
  [ChainId.BASE_SEPOLIA]: new Token(
    ChainId.BASE_SEPOLIA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.SONEIUM]: new Token(
    ChainId.SONEIUM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [2741]: new Token(
    2741,
    '0x3439153EB7AF838Ad19d56E1571FBD09333C2809',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [11124]: new Token(
    11124,
    '0x9EDCde0257F2386Ce177C3a7FCdd97787F0D841d',
    18,
    'WETH',
    'Wrapped Ether'
  ),
};

function isMatic(
  chainId: number
): chainId is ChainId.POLYGON | ChainId.POLYGON_MUMBAI {
  return chainId === ChainId.POLYGON_MUMBAI || chainId === ChainId.POLYGON;
}

class MaticNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMatic(this.chainId)) throw new Error('Not matic');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMatic(chainId)) throw new Error('Not matic');
    super(chainId, 18, 'MATIC', 'Polygon Matic');
  }
}

function isCelo(
  chainId: number
): chainId is ChainId.CELO | ChainId.CELO_ALFAJORES {
  return chainId === ChainId.CELO_ALFAJORES || chainId === ChainId.CELO;
}

class CeloNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isCelo(this.chainId)) throw new Error('Not celo');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isCelo(chainId)) throw new Error('Not celo');
    super(chainId, 18, 'CELO', 'Celo');
  }
}

function isGnosis(chainId: number): chainId is ChainId.GNOSIS {
  return chainId === ChainId.GNOSIS;
}

class GnosisNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isGnosis(this.chainId)) throw new Error('Not gnosis');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isGnosis(chainId)) throw new Error('Not gnosis');
    super(chainId, 18, 'XDAI', 'xDai');
  }
}

function isBnb(chainId: number): chainId is ChainId.BNB {
  return chainId === ChainId.BNB;
}

class BnbNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isBnb(this.chainId)) throw new Error('Not bnb');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isBnb(chainId)) throw new Error('Not bnb');
    super(chainId, 18, 'BNB', 'BNB');
  }
}

function isMoonbeam(chainId: number): chainId is ChainId.MOONBEAM {
  return chainId === ChainId.MOONBEAM;
}

class MoonbeamNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMoonbeam(this.chainId)) throw new Error('Not moonbeam');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMoonbeam(chainId)) throw new Error('Not moonbeam');
    super(chainId, 18, 'GLMR', 'Glimmer');
  }
}

function isAvax(chainId: number): chainId is ChainId.AVALANCHE {
  return chainId === ChainId.AVALANCHE;
}

class AvalancheNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isAvax(this.chainId)) throw new Error('Not avalanche');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isAvax(chainId)) throw new Error('Not avalanche');
    super(chainId, 18, 'AVAX', 'Avalanche');
  }
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WRAPPED_NATIVE_CURRENCY) {
      return WRAPPED_NATIVE_CURRENCY[this.chainId as ChainId];
    }
    throw new Error('Unsupported chain ID');
  }

  private static _cachedExtendedEther: { [chainId: number]: NativeCurrency } =
    {};

  public static onChain(chainId: number): ExtendedEther {
    return (
      this._cachedExtendedEther[chainId] ??
      (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId))
    );
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency } = {};

export function nativeOnChain(chainId: number): NativeCurrency {
  if (cachedNativeCurrency[chainId] != undefined) {
    return cachedNativeCurrency[chainId]!;
  }
  if (isMatic(chainId)) {
    cachedNativeCurrency[chainId] = new MaticNativeCurrency(chainId);
  } else if (isCelo(chainId)) {
    cachedNativeCurrency[chainId] = new CeloNativeCurrency(chainId);
  } else if (isGnosis(chainId)) {
    cachedNativeCurrency[chainId] = new GnosisNativeCurrency(chainId);
  } else if (isMoonbeam(chainId)) {
    cachedNativeCurrency[chainId] = new MoonbeamNativeCurrency(chainId);
  } else if (isBnb(chainId)) {
    cachedNativeCurrency[chainId] = new BnbNativeCurrency(chainId);
  } else if (isAvax(chainId)) {
    cachedNativeCurrency[chainId] = new AvalancheNativeCurrency(chainId);
  } else {
    cachedNativeCurrency[chainId] = ExtendedEther.onChain(chainId);
  }

  return cachedNativeCurrency[chainId]!;
}
