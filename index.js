const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ],
});

// Your log channel ID
const LOG_CHANNEL_ID = "1469107469081907253";

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {
  try {
    const channel = await client.channels.fetch(LOG_CHANNEL_ID);

    if (!channel) return;

    channel.send(
      `👋 New member joined!\n` +
      `Server: **${member.guild.name}**\n` +
      `Username: **${member.user.tag}**\n` +
      `User ID: ${member.user.id}`
    );
  } catch (err) {
    console.log("Error sending join log:", err);
  }
});

client.login(process.env.TOKEN);
