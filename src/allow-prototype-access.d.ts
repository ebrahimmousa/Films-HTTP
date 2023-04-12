declare module '@handlebars/allow-prototype-access' {
    import { TemplateDelegate } from 'handlebars';

    export function allowInsecurePrototypeAccess(Handlebars: {
        compile: (template: string) => TemplateDelegate;
    }): any;

}