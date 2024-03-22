import fetch from 'node-fetch';

async function getOnlineMembers() {
    const guildId = '1006965240333881406';
    const ASTRO_KEY_NC = "THIS TOKEN HAS BEEN REMOVED DUE TO SECURITY ISSUES"

    try {
        const info_nc = await fetch(`https://discord.com/api/v10/guilds/${guildId}/members?limit=1000`, {
            headers: {
                Authorization: `Bot ${ASTRO_KEY_NC}`,
            },
        });

        const info_returned = await info_nc.json();
        let counter = 0;
        info_returned !== undefined ? info_returned?.map((nc) => {
            let arroz = counter++ 
            console.log(arroz)  
        }) : "Information not found"
    }
    catch(error) {
        console.log(`Error: ${error}`)
    }
}

getOnlineMembers();
