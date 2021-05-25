export class Option {
    name!: string;
    filterMenuName!: string;
    concatenationValue!: string;
    conditionValue!: string;
    type!: string;
}

export class GroupOption {
    options!: Option[];
    groupType!: string;
}