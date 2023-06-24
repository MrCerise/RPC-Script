const DiscordRPC = require('discord-rpc');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

const clientId = 'Client-ID';
const token = 'Token-Here';

let currentActivity = 0;
const activities = [
  {
    details: 'Activity 1',
    state: 'State 1',
    largeImageKey: 'large_image_key_1',
    largeImageText: 'Large Image Text 1',
    smallImageKey: 'small_image_key_2',
    smallImageText: 'Small Image Text 2',
    startTimestamp: new Date(),
    instance: false,
    buttons: [
      { label: 'Button 1', url: 'https://example.com' },
      { label: 'Button 2', url: 'https://example.com' },
    ],
  },
  {
    details: 'Activity 2',
    state: 'State 2',
    largeImageKey: 'large_image_key_2',
    largeImageText: 'Large Image Text 2',
    startTimestamp: new Date(),
    instance: false,
    buttons: [
      { label: 'Button 3', url: 'https://example.com' },
      { label: 'Button 4', url: 'https://example.com' },
    ],
  },
];

rpc.on('ready', () => {
  setInterval(() => {
    rpc.setActivity(activities[currentActivity]);
    currentActivity = (currentActivity + 1) % activities.length;
    console.log("Updated");
  }, 10000);
});

rpc.login({ clientId, accessToken: token }).catch(console.error);
