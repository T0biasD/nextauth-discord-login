
import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord";



const authOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: "identify email"
                }
            }
          })
    ],
    callbacks: {

        async signIn({ user, account, profile }) {

    

            console.log(user);
            console.log(profile);
            return true;
            
        },
        async jwt({token, account, profile}) {
            if (account && account.provider === "discord") {
                token.id = profile?.id;
            }

            return token;
        },

        async session({ session, token }) {
            // Tilføj Discord ID til session-objektet
           if (token?.id) {
            session.user.id = token.id;
           }

           return session;
        },


    },

};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };