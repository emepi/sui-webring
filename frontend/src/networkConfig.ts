import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";
import { DEVNET_PACKAGE_ID, DEVNET_WEBRING_ID, MAINNET_PACKAGE_ID, MAINNET_WEBRING_ID, TESTNET_PACKAGE_ID, TESTNET_WEBRING_ID } from "./Constants";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        webring_id: DEVNET_WEBRING_ID,
        package_id: DEVNET_PACKAGE_ID,
      }
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        webring_id: TESTNET_WEBRING_ID,
        package_id: TESTNET_PACKAGE_ID,
      }
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        webring_id: MAINNET_WEBRING_ID,
        package_id: MAINNET_PACKAGE_ID,
      }
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
