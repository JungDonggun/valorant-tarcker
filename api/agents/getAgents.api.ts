import fetch from "isomorphic-unfetch";
import { SERVER, VERSION } from "../../common/urls";

export interface GetAgentsResponseBody {
  status: boolean;
  data: GetAgentsResponseBodyData;
}

export interface GetAgentsResponseBodyData {
  assetPath: string;
  bustPortrait: string;
  characterTags: null | string;
  description: string;
  developerName: string;
  displayIcon: string;
  displayIconSmall: string;
  displayName: string;
  fullPortrait: string;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  killfeedPortrait: string;
  role: {
    assetPath: string
    description: string
    displayIcon: string
    displayName: string
    uuid: string
  };
  uuid: string;
  voiceLine: {
    maxDuration: number;
    mediaList: {
      id: number;
      wave: string;
      wwise: string;
    }[]
    minDuration: number;
  };
  abilities: {
    description: string
    displayIcon: string
    displayName: string
    slot: string
  };
}

export const getAgentsRequest = async () => {
  const request = await fetch(`${SERVER}/${VERSION}/agents`);
  const getAgentsResponse = await request.json();

  return {
    props: {
      getAgentsResponse
    }
  };
};
