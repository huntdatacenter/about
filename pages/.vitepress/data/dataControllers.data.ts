
import { defineLoader } from 'vitepress'

export interface Data {
  readonly dataControllers: any[];
}

declare const data: Data;
export { data }

export default defineLoader({
  async load(): Promise<Data> {
    const uri = `https://assets.hdc.ntnu.no/assets/data/data-controllers/current.json`;

    const response = await fetch(uri);

    // console.log(response.ok)

    if (!response.ok) {
      return {
        dataControllers: []
      };
    }

    const dataControllers: any[] = await response.json();

    // console.log(dataControllers)

    return {
      dataControllers: dataControllers
    };
  }
})
