import { BigNumber } from '@ethersproject/bignumber';
import {
  CondensedAddLiquidityOptions,
  MixedRouteSDK,
  Protocol,
  TPool,
  Trade,
} from '@uniswap/router-sdk';
import {
  Currency,
  Fraction,
  Percent,
  Token,
  TradeType,
} from '@uniswap/sdk-core';
import {
  SwapOptions as UniversalRouterSwapOptions,
  UniversalRouterVersion,
} from '@uniswap/universal-router-sdk';
import { Pair, Route as V2RouteRaw } from '@uniswap/v2-sdk';
import {
  MethodParameters as SDKMethodParameters,
  Pool,
  Pool as V3Pool,
  Position,
  Route as V3RouteRaw,
} from '@uniswap/v3-sdk';
import { Pool as V4Pool, Route as V4RouteRaw } from '@uniswap/v4-sdk';

import { SimulationStatus } from '../providers';
import { CurrencyAmount } from '../util/amounts';

import { RouteWithValidQuote } from './alpha-router';

export class V4Route extends V4RouteRaw<Currency, Currency> {
  protocol: Protocol.V4 = Protocol.V4;
}
export class V3Route extends V3RouteRaw<Token, Token> {
  protocol: Protocol.V3 = Protocol.V3;
}
export class V2Route extends V2RouteRaw<Token, Token> {
  protocol: Protocol.V2 = Protocol.V2;
}
export class MixedRoute extends MixedRouteSDK<Currency, Currency> {
  protocol: Protocol.MIXED = Protocol.MIXED;
}
export type SupportedRoutes = V4Route | V3Route | V2Route | MixedRoute;

export type SwapRoute = {
  /**
   * The quote for the swap.
   * For EXACT_IN swaps this will be an amount of token out.
   * For EXACT_OUT this will be an amount of token in.
   */
  quote: CurrencyAmount;
  /**
   * The quote adjusted for the estimated gas used by the swap.
   * This is computed by estimating the amount of gas used by the swap, converting
   * this estimate to be in terms of the quote token, and subtracting that from the quote.
   * i.e. quoteGasAdjusted = quote - estimatedGasUsedQuoteToken
   */
  quoteGasAdjusted: CurrencyAmount;
  /**
   * The quote adjusted for the estimated gas used by the swap as well as the portion amount, if applicable.
   * This is computed by estimating the amount of gas used by the swap, converting
   * this estimate to be in terms of the quote token, and subtracting that from the quote.
   * Then it uses the IPortionProvider.getPortionAdjustedQuote method to adjust the quote for the portion amount.
   * i.e. quoteGasAdjusted = quote - estimatedGasUsedQuoteToken - portionAmount
   */
  quoteGasAndPortionAdjusted?: CurrencyAmount;
  /**
   * The estimate of the gas used by the swap.
   */
  estimatedGasUsed: BigNumber;
  /**
   * The estimate of the gas used by the swap in terms of the quote token.
   */
  estimatedGasUsedQuoteToken: CurrencyAmount;
  /**
   * The estimate of the gas used by the swap in USD.
   */
  estimatedGasUsedUSD: CurrencyAmount;
  /**
   * The estimate of the gas used by the swap in terms of the gas token if specified.
   * will be undefined if no gas token is specified in the AlphaRouter config
   */
  estimatedGasUsedGasToken?: CurrencyAmount;
  /*
   * The gas price used when computing quoteGasAdjusted, estimatedGasUsedQuoteToken, etc.
   */
  gasPriceWei: BigNumber;
  /**
   * The Trade object representing the swap.
   */
  trade: Trade<Currency, Currency, TradeType>;
  /**
   * The routes of the swap.
   */
  route: RouteWithValidQuote[];
  /**
   * The block number used when computing the swap.
   */
  blockNumber: BigNumber;
  /**
   * The calldata to execute the swap. Only returned if swapConfig was provided when calling the router.
   */
  methodParameters?: MethodParameters;
  /**
   * Enum that is returned if simulation was requested
   * 0 if simulation was not supported
   * 1 if simulation was attempted and failed
   * 2 if simulation was successful (simulated gas estimates are returned)
   * 3 ...
   */
  simulationStatus?: SimulationStatus;
  /**
   * Used internally within routing-api to see how many route requests
   * hit the cached routes. This is used further down the line for future perf optimizations.
   */
  hitsCachedRoute?: boolean;
  /**
   * Portion amount either echoed from upstream routing-api for exact out or calculated from portionBips for exact in
   */
  portionAmount?: CurrencyAmount;
};

export type MethodParameters = SDKMethodParameters & { to: string };

export type SwapToRatioRoute = SwapRoute & {
  optimalRatio: Fraction;
  postSwapTargetPool: Pool;
};

export enum SwapToRatioStatus {
  SUCCESS = 1,
  NO_ROUTE_FOUND = 2,
  NO_SWAP_NEEDED = 3,
}

export type SwapToRatioSuccess = {
  status: SwapToRatioStatus.SUCCESS;
  result: SwapToRatioRoute;
};

export type SwapToRatioFail = {
  status: SwapToRatioStatus.NO_ROUTE_FOUND;
  error: string;
};

export type SwapToRatioNoSwapNeeded = {
  status: SwapToRatioStatus.NO_SWAP_NEEDED;
};

export type SwapToRatioResponse =
  | SwapToRatioSuccess
  | SwapToRatioFail
  | SwapToRatioNoSwapNeeded;

export enum SwapType {
  UNIVERSAL_ROUTER,
  SWAP_ROUTER_02,
}

// Swap options for Universal Router and Permit2.
export type SwapOptionsUniversalRouter = UniversalRouterSwapOptions & {
  type: SwapType.UNIVERSAL_ROUTER;
  version: UniversalRouterVersion;
  simulate?: { fromAddress: string };
};

// Swap options for router-sdk and SwapRouter02.
export type SwapOptionsSwapRouter02 = {
  type: SwapType.SWAP_ROUTER_02;
  recipient: string;
  slippageTolerance: Percent;
  deadline: number;
  simulate?: { fromAddress: string };
  inputTokenPermit?: {
    v: 0 | 1 | 27 | 28;
    r: string;
    s: string;
  } & (
    | {
        amount: string;
        deadline: string;
      }
    | {
        nonce: string;
        expiry: string;
      }
  );
};

export type SwapOptions = SwapOptionsUniversalRouter | SwapOptionsSwapRouter02;

// Config passed in to determine configurations on acceptable liquidity
// to add to a position and max iterations on the route-finding algorithm
export type SwapAndAddConfig = {
  maxIterations: number;
  ratioErrorTolerance: Fraction;
};

// Options for executing the swap and add.
// If provided, calldata for executing the swap and add will also be returned.
export type SwapAndAddOptions = {
  swapOptions: SwapOptionsSwapRouter02;
  addLiquidityOptions: CondensedAddLiquidityOptions;
};

// SwapAndAddOptions plus all other parameters needed to encode the
// on-chain swap-and-add process
export type SwapAndAddParameters = {
  // starting balance for tokenIn which will inform the tokenIn position amount
  initialBalanceTokenIn: CurrencyAmount;
  // starting balance for tokenOut which will inform the tokenOut position amount
  initialBalanceTokenOut: CurrencyAmount;
  // position details needed to create a new Position with the known liquidity amounts
  preLiquidityPosition: Position;
};

/**
 * Provides functionality for finding optimal swap routes on the Uniswap protocol.
 *
 * @export
 * @abstract
 * @class IRouter
 */
export abstract class IRouter<RoutingConfig> {
  /**
   * Finds the optimal way to swap tokens, and returns the route as well as a quote for the swap.
   * Considers split routes, multi-hop swaps, and gas costs.
   *
   * @abstract
   * @param amount The amount specified by the user. For EXACT_IN swaps, this is the input token amount. For EXACT_OUT swaps, this is the output token.
   * @param quoteCurrency The currency of the token we are returning a quote for. For EXACT_IN swaps, this is the output token. For EXACT_OUT, this is the input token.
   * @param tradeType The type of the trade, either exact in or exact out.
   * @param [swapOptions] Optional config for executing the swap. If provided, calldata for executing the swap will also be returned.
   * @param [partialRoutingConfig] Optional config for finding the optimal route.
   * @returns The swap route.
   */
  abstract route(
    amount: CurrencyAmount,
    quoteCurrency: Currency,
    swapType: TradeType,
    swapOptions?: SwapOptions,
    partialRoutingConfig?: Partial<RoutingConfig>
  ): Promise<SwapRoute | null>;
}

export abstract class ISwapToRatio<RoutingConfig, SwapAndAddConfig> {
  abstract routeToRatio(
    token0Balance: CurrencyAmount,
    token1Balance: CurrencyAmount,
    position: Position,
    swapAndAddConfig: SwapAndAddConfig,
    swapAndAddOptions?: SwapAndAddOptions,
    routingConfig?: RoutingConfig
  ): Promise<SwapToRatioResponse>;
}

export function cloneV2RouteWithNewPools(
  originalRoute: V2Route,
  newPools: Pair[]
): V2Route {
  // Reuse the original input and output currencies
  const input = originalRoute.input;
  const output = originalRoute.output;

  // Construct a new Route instance with the new pairs
  return new V2Route(newPools, input, output);
}

export function cloneV3RouteWithNewPools(
  originalRoute: V3Route,
  newPools: V3Pool[]
): V3Route {
  // Reuse the original input and output currencies
  const input = originalRoute.input;
  const output = originalRoute.output;

  // Construct a new Route instance with the new pairs
  return new V3Route(newPools, input, output);
}

export function cloneV4RouteWithNewPools(
  originalRoute: V4Route,
  newPools: V4Pool[]
): V4Route {
  // Reuse the original input and output currencies
  const input = originalRoute.input;
  const output = originalRoute.output;

  // Construct a new Route instance with the new pairs
  return new V4Route(newPools, input, output);
}

export function cloneMixedRouteWithNewPools(
  originalRoute: MixedRoute,
  newPools: TPool[]
): MixedRoute {
  // Reuse the original input and output currencies
  const input = originalRoute.input;
  const output = originalRoute.output;

  // Construct a new Route instance with the new pairs
  return new MixedRoute(newPools, input, output, /* retainFakePools = */ true);
}
