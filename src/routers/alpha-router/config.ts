import { ChainId } from '@uniswap/sdk-core';

import { AlphaRouterConfig, LowerCaseStringArray } from './alpha-router';

export const DEFAULT_ROUTING_CONFIG_BY_CHAIN = (
  chainId: ChainId
): AlphaRouterConfig => {
  switch (chainId) {
    // Optimism
    case ChainId.OPTIMISM:
    case ChainId.OPTIMISM_GOERLI:
    case ChainId.OPTIMISM_SEPOLIA:
    case ChainId.BASE:
    case ChainId.BASE_GOERLI:
    case ChainId.BASE_SEPOLIA:
    case ChainId.BLAST:
    case ChainId.WORLDCHAIN:
    case ChainId.UNICHAIN_SEPOLIA:
    case ChainId.MONAD_TESTNET:
    case ChainId.UNICHAIN:
    case ChainId.SONEIUM:
      return {
        v2PoolSelection: {
          topN: 3,
          topNDirectSwaps: 1,
          topNTokenInOut: 5,
          topNSecondHop: 2,
          topNWithEachBaseToken: 2,
          topNWithBaseToken: 6,
        },
        v3PoolSelection: {
          topN: 2,
          topNDirectSwaps: 2,
          topNTokenInOut: 2,
          topNSecondHop: 1,
          topNWithEachBaseToken: 3,
          topNWithBaseToken: 3,
        },
        v4PoolSelection: {
          topN: 2,
          topNDirectSwaps: 2,
          topNTokenInOut: 2,
          topNSecondHop: 1,
          topNWithEachBaseToken: 3,
          topNWithBaseToken: 3,
        },
        maxSwapsPerPath: 3,
        minSplits: 1,
        maxSplits: 7,
        distributionPercent: 10,
        forceCrossProtocol: false,
      };
    // Arbitrum calls have lower gas limits and tend to timeout more, which causes us to reduce the multicall
    // batch size and send more multicalls per quote. To reduce the amount of requests each quote sends, we
    // have to adjust the routing config so we explore fewer routes.
    case ChainId.ARBITRUM_ONE:
    case ChainId.ARBITRUM_GOERLI:
    case ChainId.ARBITRUM_SEPOLIA:
    case ChainId.CELO:
    case ChainId.CELO_ALFAJORES:
    case 2741 as ChainId: // Abstract mainnet
    case 11124 as ChainId: // Abstract testnet
      return {
        v2PoolSelection: {
          topN: 3,
          topNDirectSwaps: 1,
          topNTokenInOut: 5,
          topNSecondHop: 2,
          topNWithEachBaseToken: 2,
          topNWithBaseToken: 6,
        },
        v3PoolSelection: {
          topN: 2,
          topNDirectSwaps: 2,
          topNTokenInOut: 2,
          topNSecondHop: 1,
          topNWithEachBaseToken: 3,
          topNWithBaseToken: 2,
        },
        v4PoolSelection: {
          topN: 2,
          topNDirectSwaps: 2,
          topNTokenInOut: 2,
          topNSecondHop: 1,
          topNWithEachBaseToken: 3,
          topNWithBaseToken: 2,
        },
        maxSwapsPerPath: 2,
        minSplits: 1,
        maxSplits: 7,
        distributionPercent: 25,
        forceCrossProtocol: false,
      };
    default:
      return {
        v2PoolSelection: {
          topN: 3,
          topNDirectSwaps: 1,
          topNTokenInOut: 5,
          topNSecondHop: 2,
          tokensToAvoidOnSecondHops: new LowerCaseStringArray(
            '0xd46ba6d942050d489dbd938a2c909a5d5039a161' // AMPL on Mainnet
          ),
          topNWithEachBaseToken: 2,
          topNWithBaseToken: 6,
        },
        v3PoolSelection: {
          topN: 2,
          topNDirectSwaps: 2,
          topNTokenInOut: 3,
          topNSecondHop: 1,
          topNWithEachBaseToken: 3,
          topNWithBaseToken: 5,
        },
        v4PoolSelection: {
          topN: 2,
          topNDirectSwaps: 2,
          topNTokenInOut: 3,
          topNSecondHop: 1,
          topNWithEachBaseToken: 3,
          topNWithBaseToken: 5,
        },
        maxSwapsPerPath: 3,
        minSplits: 1,
        maxSplits: 7,
        distributionPercent: 5,
        forceCrossProtocol: false,
      };
  }
};
export const ETH_GAS_STATION_API_URL =
  'https://ethgasstation.info/api/ethgasAPI.json';
