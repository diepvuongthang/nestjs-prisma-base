import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: Number(process.env.PORT),
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Trader Dashboard API',
    description: 'Trader Dashboard API',
    version: '1.0',
    path: 'api-docs',
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
