import {objectType} from "nexus";

export const Query = objectType({
    name: "Query",
    definition(t) {
        t.string("hello", {
            nullable: true,
            resolve: (root, args, ctx) => {
                return "Hello world from ApolloServer on Now 2.0!";
            },
        });
    },
});
