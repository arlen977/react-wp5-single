import { makeAutoObservable, observable, flow } from "mobx";
import { getMenu } from "@/pages/login/api";
import Storage from "@/utils/storage";
const storage = new Storage();

/**
 *公共状态
 *
 * @class CommonStore
 */
class CommonStore {
    loading = false;
    menuData = storage.reduxStorageS("menuData");

    constructor() {
        makeAutoObservable(
            this,
            {
                loading: observable,
                menuData: observable,
                feachMenu: flow,
            },
            { autoBind: true }
        );
    }

    setLoading(value) {
        this.loading = value;
    }

    *feachMenu(data) {
        try {
            const res = yield getMenu(data);
            if (res.code === 0) {
                this.menuData = res.data;
                storage.setS("menuData", res.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
const commonStore = new CommonStore();

export { commonStore };
