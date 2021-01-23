/**
 * External interfaces for integration into code-server over IPC. No vs imports
 * should be made in this file.
 */
export interface Options {
	base: string
	disableTelemetry: boolean
	disableUpdateCheck: boolean
}

export interface InitMessage {
	type: 'init';
	id: string;
	options: VscodeOptions;
}

export type Query = { [key: string]: string | string[] | undefined | Query | Query[] };

export interface SocketMessage {
	type: 'socket';
	query: Query;
}

export interface CliMessage {
	type: 'cli';
	args: Args;
}

export interface OpenCommandPipeArgs {
	type: 'open';
	fileURIs?: string[];
	folderURIs: string[];
	forceNewWindow?: boolean;
	diffMode?: boolean;
	addMode?: boolean;
	gotoLineMode?: boolean;
	forceReuseWindow?: boolean;
	waitMarkerFilePath?: string;
}

export type CodeServerMessage = InitMessage | SocketMessage | CliMessage;

export interface ReadyMessage {
	type: 'ready';
}

export interface OptionsMessage {
	id: string;
	type: 'options';
	options: WorkbenchOptions;
}

export type VscodeMessage = ReadyMessage | OptionsMessage;

export interface StartPath {
	url: string;
	workspace: boolean;
}

export interface Args {
	'user-data-dir'?: string;

	'enable-proposed-api'?: string[];
	'extensions-dir'?: string;
	'builtin-extensions-dir'?: string;
	'extra-extensions-dir'?: string[];
	'extra-builtin-extensions-dir'?: string[];
	'ignore-last-opened'?: boolean;

	locale?: string

	log?: string;
	verbose?: boolean;
	home?: string;

	_: string[];
}

export interface VscodeOptions {
	readonly args: Args;
	readonly remoteAuthority: string;
	readonly startPath?: StartPath;
}

export interface VscodeOptionsMessage extends VscodeOptions {
	readonly id: string;
}

export interface UriComponents {
	readonly scheme: string;
	readonly authority: string;
	readonly path: string;
	readonly query: string;
	readonly fragment: string;
}

export interface NLSConfiguration {
	locale: string;
	availableLanguages: {
		[key: string]: string;
	};
	pseudo?: boolean;
	_languagePackSupport?: boolean;
}

export interface WorkbenchOptions {
	readonly workbenchWebConfiguration: {
		readonly remoteAuthority?: string;
		readonly folderUri?: UriComponents;
		readonly workspaceUri?: UriComponents;
		readonly logLevel?: number;
		readonly workspaceProvider?: {
			payload: [
				['userDataPath', string],
				['enableProposedApi', string],
			];
		};
		readonly homeIndicator?: {
			href: string,
			icon: string,
			title: string,
		},
	};
	readonly remoteUserDataUri: UriComponents;
	readonly productConfiguration: {
		codeServerVersion?: string;
		readonly extensionsGallery?: {
			readonly serviceUrl: string;
			readonly itemUrl: string;
			readonly controlUrl: string;
			readonly recommendationsUrl: string;
		};
	};
	readonly nlsConfiguration: NLSConfiguration;
	readonly commit: string;
}

export interface WorkbenchOptionsMessage {
	id: string;
}
