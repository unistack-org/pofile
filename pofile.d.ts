declare interface IHeaders {
    'Project-Id-Version': string;
    'Report-Msgid-Bugs-To': string;
    'POT-Creation-Date': string;
    'PO-Revision-Date': string;
    'Last-Translator': string;
    'Language': string;
    'Language-Team': string;
    'Content-Type': string;
    'Content-Transfer-Encoding': string;
    'Plural-Forms': string;
    [name: string]: string;
}

declare class Item {
    public msgid: string;
    public msgctxt?: string;
    public references: string[];
    public msgid_plural?: string;
    public msgstr: string[];
    public comments: string[];
    public extractedComments: string[];
    public flags: Record<string, boolean | undefined>;
    public obsolete: boolean;
    private nplurals: number;
}

declare class PO {
    public comments: string[];
    public extractedComments: string[];
    public items: Item[];
    public headers: Partial<IHeaders>

    public static parse(data: string): PO;
    public static parsePluralForms(forms: string): PO;
    public static Item: typeof Item;
}

export = PO
