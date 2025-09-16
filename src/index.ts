import { LevelDBProvider, Serenity, ServerEvent, WorldEvent } from "@serenityjs/core";
import { Pipeline } from "@serenityjs/plugins";

const serenity = new Serenity({
    path: "./properties.json",
    serenity: {
        resources: "./resource_packs",
        permissions: "./permissions.json",
    },
});

const _pipeline = new Pipeline(serenity, { path: "./plugins" });
serenity.registerProvider(LevelDBProvider, { path: "./worlds" });

_pipeline.start();
serenity.start();
