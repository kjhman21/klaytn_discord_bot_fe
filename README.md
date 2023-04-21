# Klaytn Discord Bot Frontend

> To refer to the backend code, please refer to [Klaytn Discord Bot Backend](https://github.com/kjhman21/klaytn_discord_bot_be).

> The code is forked from [Klaytn Online Toolkit](https://github.com/klaytn/klaytn-online-toolkit).
> For other reference implementations, please refer to the repository.

## Getting Started

### Setting Up .env
The configuration parameters are stored in `.env`. Please execute the following:

1. Copy `.env.template` to `.env`.
```bash
cp .env.template .env
```

2. Update the configuration parameters in `.env`.

Thear are only two parameters in `.env`. Here is an example and descriptions.
```bash
// Just use as it is. This is the URL where we can bring the avatar image.
REACT_APP_DISCORD_AVATAR_URL=https://cdn.discordapp.com/avatars/
// This is the URL of the Klaytn Discord Bot Backend. Update it based on your environment settings.
REACT_APP_BACKEND_API_URL=http://localhost:4001
```

### Testing on Your Local Machine

You can try to run it on your local machine by executing the following command:

```bash
npm start
```

But this is just for dry run. To check the full functionality, you need to setup backend and discord bot configuration together.