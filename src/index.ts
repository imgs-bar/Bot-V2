import {config} from 'dotenv'
import { registerCommands, registerEvents } from './utils/registry';
import DiscordClient from './client/client';
import disbut from 'discord-buttons'
import {Intents} from "discord.js";
const client = new DiscordClient();
disbut(client)

config();

(async () => {
  client.prefix = process.env.prefix!;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.TOKEN);
})();

