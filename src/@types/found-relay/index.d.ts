declare module 'found-relay' {
	import { Environment } from 'relay-runtime';
	import { Resolver as FoundResolver } from 'found';
	export declare const Resolver: new (env: Environment) => FoundResolver;
}
