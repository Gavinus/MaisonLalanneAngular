import { CHAMBRES } from "./mock-chambres";

export class InMemoryDataService implements InMemoryDataService {
        createDb() {
                let chambres = CHAMBRES;
                return { chambres };
        }
}