import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  private _list: ListItem[];

  //constructor receives the list
  private constructor(newList: ListItem[] = []) {
    this._list = newList;
  }

  //getter
  public get list(): ListItem[] {
    return this._list;
  }

  //methods
  load(): void {
    console.log("Loading list");
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );
      FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    console.log("Saving list");
    localStorage.setItem("myList", JSON.stringify(this._list));
  }
  clearList(): void {
    console.log("Clearing list");
    this._list = [];
    this.save();
  }

  addItem(newItem: ListItem): void {
    console.log(`Adding item id ${newItem.id}`);
    this._list.push(newItem);
    this.save();
  }
  removeItem(itemId: string): void {
    console.log(`Removing item id ${itemId}`);
    this._list = this._list.filter((item) => item.id !== itemId);
    this.save();
  }
}
