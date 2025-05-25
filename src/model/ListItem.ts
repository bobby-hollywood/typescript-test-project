export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {
    private _id: string;
    private _item: string;
    private _checked: boolean;

    constructor(id: string = '', item: string = '', checked: boolean = false) {
        this._id = id;
        this._item = item;
        this._checked = checked;
    }

    //Getters
    public get id(): string{
        return this._id;
    }
    public get item(): string{
        return this._item;
    }
    public get checked(): boolean{
        return this._checked;
    }

    //Setters
    public set id(newId: string){
        this._id = newId;
    }
    public set item(newItem: string){
        this._item = newItem;
    }
    public set checked(newChecked: boolean){
        this._checked = newChecked;
    }


}