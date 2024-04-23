import { CommanderDescriptor, CommanderMovementType, CommanderPersonalityType, baseCommander, commanderMovementTypes, commanderPersonalityTypes } from "../data/commanders";

function prepareNumber(input: any, fallback: number) : number {

    const value = Number(input);
    return Number.isNaN(value) ? fallback : value;
}

function prepareMove(input: any, fallback: CommanderMovementType) : CommanderMovementType {

    if (commanderMovementTypes.includes(input)) return input;
    return fallback;
}

function preparePersonality(input: any, fallback: CommanderPersonalityType) : CommanderPersonalityType {

    if (commanderPersonalityTypes.includes(input)) return input;
    return fallback;
}

export function prepareCommanderData(input: object, fallback: CommanderDescriptor = { ...baseCommander }) : CommanderDescriptor {

    const commander = { ...fallback };

    if ('name' in input) commander.name = String(input.name);
    if ('staffRating' in input) commander.staffRating = prepareNumber(input.staffRating, fallback.staffRating);
    if ('move' in input) commander.move = prepareMove(input.move, fallback.move);
    if ('personality' in input) commander.personality = preparePersonality(input.personality, fallback.personality);

    return commander;
};
