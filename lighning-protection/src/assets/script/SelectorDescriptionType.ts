import type { OptionDescription } from './OptionDescriptoponType';

export type SelectorDescription = 
{
    label: string,
    modelKey: string,
    options: OptionDescription[],
    default?: any,
    tooltip?: string
}