import type { NewEatData } from "../models/add-eat/models";
import { EatData } from "../models/eats/models";

class Api {
    async post<T>(body: T) {
        return Promise.resolve(body);
    }
}

const api = new Api();

export const apiPostEat = async (eat: NewEatData): Promise<EatData> => {
    const data = await api.post(eat);

    return {
        id: Math.random().toString(),
        ...data,
    };
}