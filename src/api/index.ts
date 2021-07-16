import axios from 'axios';

export const BASE_URL = 'https://betaapi.imgs.bar/v2';

export default class Key {
    
    /**
     * no impostors here
     */
    botKey: string;

    constructor(botKey: string) {
        this.botKey = botKey;
    }
}

export async function createInvite(): Promise<string> {
  const data = await axios.post(
    `${BASE_URL}/invites/create`,
    {},
    {
      withCredentials: true,
    }
  );
  return data.data.invite;
}
