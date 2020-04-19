readdirSync(__dirname + "/../commands/").forEach((folder) => {
        readdirSync(__dirname + `/../commands/${folder}`).filter(file => file.endsWith('.js')).forEach((f) => {
            try {
                let props = require(`../commands/${folder}/${f}`);
                Client.commands.set(props.help.name, props);
                if(props.help.aliases) props.help.aliases.forEach(alias => {
                Client.aliases.set(alias, props.help.name);
            });
            } catch (err) {
                console.log(`Command ${f} failed to load`);
            }
        });
    });
