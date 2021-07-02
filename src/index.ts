import {config} from 'dotenv'
import { registerCommands, registerEvents } from './utils/registry';
import DiscordClient from './client/client';
const client = new DiscordClient({});

config();

(async () => {
  client.prefix = process.env.prefix!;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.TOKEN);
})();

