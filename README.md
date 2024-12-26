This is a template for NextAuth login with Discord Provider.

## Setup your project.

First, download the dependencies:

```bash
npm install
```
Go to https://discord.com/developers/applications and create a new application.
Add a redirect called: 
```bash
http://localhost:3000/api/auth/callback/discord
```

Make a new file called: 
```bash 
.env
```

Then copy your ClientID and ClientSecret, and paste it into your variables in the .env file:
```bash
DISCORD_CLIENT_ID="",
DISCORD_CLIENT_SECRET=""
```
