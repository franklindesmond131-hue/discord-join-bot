
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages
  ],
});

const OWNER_ID = "1085466254522974248";

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {
  try {
    const owner = await client.users.fetch(OWNER_ID);

    await owner.send(
      `👋 New member joined **${member.guild.name}**:\n` +
      `Username: **${member.user.tag}**\n` +
      `User ID: ${member.user.id}`
    );
  } catch (err) {
    console.log("Could not send DM:", err);
  }
});

client.login(process.env.TOKEN);
