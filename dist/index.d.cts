#!/usr/bin/env node
type GitUser = {
    name?: string;
    emailPrefix?: string;
};
type CrewName = string;
interface CodefatherRule {
    /** List of the files or folders that can only be modified by a given list of users */
    match: Array<RegExp | string>;
    /** List of users authorized to modify the list of files or folders.
     * name: github username.
     * emailPrefix: prefix of the user email tied to their Github account (e.g. johnny.fontane@jazz.com should be johnny.fontane) .
     */
    goodfellas: GitUser[];
    /** List of authorized user crews. The crews must be defined at the root of your config when used in CLI mode. */
    crews?: CrewName[];
    /** The message displayed if an unauthorized user tries to modify a protected file. If empty, a random message will be generated. */
    message?: string;
    /** If true, a warning will be issued and the script will not throw an error. False by default. */
    allowForgiveness?: boolean;
}
interface CodefatherConfig {
    /** List of users authorized to modify the list of files or folders.
     * name: github username.
     * emailPrefix: prefix of the user email tied to their Github account (e.g. johnny.fontane@jazz.com should be johnny.fontane) .
     */
    caporegimes?: GitUser[];
    /** Rules that apply to protected files and folders */
    rules: CodefatherRule[];
    /** Options to refine the output */
    options?: {
        /** If true, the codefather face will appear in the terminal. Defaults to true. */
        showAscii?: boolean;
        /** If true, all the pull request commiters will be checked against the authorized users. Only used in a github action context. Defaults to true. */
        vouchForAllCommiters?: boolean;
    };
    /** Options to auto assign reviewers on Github */
    codeReviews?: {
        /** If true, goodfellas responsible for modified files will be assigned on relevant pull requests, except the commiters. Defaults to true. */
        autoAssignGoodfellas: boolean;
        /** If true, caporegimes will be assigned on every pull request except the commiters. Defaults to false. */
        autoAssignCaporegimes: boolean;
    };
    /** Group users in teams. The crews names and composition are free in cli mode, but should match your github teams if used in a github action */
    crews?: Record<CrewName, GitUser[]>;
}
interface ValidationResult {
    errors: string[];
    warnings: string[];
}
declare enum MessageType {
    Success = "success",
    MultiSuccess = "multi-success",
    Error = "error",
    MultiErrors = "multi-errors",
    Warning = "warning",
    NoChanges = "no-changes",
    NotFound = "not-found",
    NoGitConfig = "no-gitconfig"
}
type MessageOptions = {
    goodfellas?: CodefatherRule["goodfellas"];
    commiters?: GitUser[];
};
declare const colorsMap: {
    success: string;
    error: string;
    warning: string;
    info: string;
};

export { type CodefatherConfig, type CodefatherRule, type CrewName, type GitUser, type MessageOptions, MessageType, type ValidationResult, colorsMap };
