import { AuthorEffects } from './author.effects';
import { AuthorService } from './author.service';

export * from './author.effects';
export * from './author.service';


export const services =  [
    AuthorService
];

export const effects =  [
    AuthorEffects
];
