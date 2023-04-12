declare module '@handlebars/allow-prototype-access' {
    import { TemplateDelegate } from 'handlebars';

    function allowInsecurePrototypeAccess(Handlebars: {
        compile: (template: string) => TemplateDelegate;
    }): any;

    export = allowInsecurePrototypeAccess;
}