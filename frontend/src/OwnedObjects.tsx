import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { useNetworkVariable } from "./networkConfig";
import { SuiObjectData } from "@mysten/sui/client";

export function OwnedObjects() {
  //const account = useCurrentAccount();

  const  webring_id = useNetworkVariable("webring_id");

  const { data, isPending, error } = useSuiClientQuery(
    "getObject",
    {
      id: webring_id,
      options: {
        showContent: true,
      }
    }
  );

  if (error) {
    return <Flex>Error: {error.message}</Flex>;
  }

  if (isPending || !data) {
    return <Flex>Loading...</Flex>;
  }

  if(!data.data) return <div className="text-center text-red-500">Not Found...</div>;

  return (
    <Flex direction="column" my="2">
      {getWebringSites(data.data)?.site_ids.map( site_id => 
        <div>
          site: {site_id}
        </div>
      )}
    </Flex>
  );
}

function getWebringSites(data: SuiObjectData) {
  if (data.content?.dataType != "moveObject") return null;

  return data.content.fields as {
    id: string,
    owner: string,
    site_ids: string[]
  };
}